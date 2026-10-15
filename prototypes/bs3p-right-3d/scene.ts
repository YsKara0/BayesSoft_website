import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { LAYERS, surfaceGeometry, type LayerName } from "./geometry.js";
import { DURATION, layerStateAt, phaseAt, revealAt } from "./motion.js";

export function createSystemScene(
  figure: HTMLElement, replay: HTMLButtonElement, settle: HTMLButtonElement,
  status: HTMLElement, onFailure: () => void,
) {
  const host = figure.querySelector<HTMLElement>(".webgl-host")!;
  const overlayHost = figure.querySelector<HTMLElement>(".surface-overlays")!;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  renderer.setClearColor(0xffffff, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  host.append(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-4, 4, 2.25, -2.25, .1, 40);
  camera.position.set(3.3, 2.8, 13);
  camera.lookAt(.08, .26, 0);
  camera.updateMatrixWorld();
  const room = new RoomEnvironment();
  const pmrem = new THREE.PMREMGenerator(renderer);
  const environment = pmrem.fromScene(room, .045);
  scene.environment = environment.texture;
  scene.environmentIntensity = .55;
  room.dispose(); pmrem.dispose();
  const key = new THREE.DirectionalLight("#ffffff", 2.1);
  key.position.set(-4, 7, 5);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  Object.assign(key.shadow.camera, { left: -6, right: 6, top: 6, bottom: -6, near: .1, far: 25 });
  key.shadow.bias = -.0001; key.shadow.normalBias = .012;
  const rim = new THREE.DirectionalLight("#dde6f5", .9);
  rim.position.set(5, 2, -3);
  scene.add(key, rim, new THREE.HemisphereLight("#ffffff", "#a5b5c6", .3));

  const geometries = new Set<THREE.BufferGeometry>();
  const materials = new Set<THREE.Material>();
  const names = Object.keys(LAYERS) as LayerName[];
  const groups = {} as Record<LayerName, THREE.Group>;
  const solids = {} as Record<LayerName, THREE.Mesh>;
  const faces = {} as Record<LayerName, THREE.MeshPhysicalMaterial[]>;
  for (const name of names) {
    const c = LAYERS[name], group = new THREE.Group();
    const geometry = surfaceGeometry(c.width, c.height, c.depth);
    const face = new THREE.MeshPhysicalMaterial({ color: c.color, roughness: .56, metalness: .025, clearcoat: .12, clearcoatRoughness: .55, transparent: true });
    const edge = new THREE.MeshPhysicalMaterial({ color: c.edge, roughness: .43, metalness: .09, transparent: true });
    geometries.add(geometry); materials.add(face); materials.add(edge);
    const mesh = new THREE.Mesh(geometry, [face, edge]);
    mesh.receiveShadow = true;
    group.add(mesh); groups[name] = group; solids[name] = mesh; faces[name] = [face, edge];
    scene.add(group);
  }
  // Two tiny alignment seats, not cables or paths around the system.
  const seatGeometry = new THREE.BoxGeometry(.14, .08, .22);
  const seatMaterial = new THREE.MeshStandardMaterial({ color: "#9aafc3", roughness: .55, metalness: .08 });
  geometries.add(seatGeometry); materials.add(seatMaterial);
  const seats = [new THREE.Mesh(seatGeometry, seatMaterial), new THREE.Mesh(seatGeometry, seatMaterial)];
  seats[0].position.set(-2.055, .22, .20);
  seats[1].position.set(.78, .94, .31);
  seats.forEach(seat => scene.add(seat));

  const shadowCanvas = document.createElement("canvas");
  shadowCanvas.width = shadowCanvas.height = 128;
  const ctx = shadowCanvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(64,64,4,64,64,63);
  gradient.addColorStop(0,"rgba(46,65,88,.15)");
  gradient.addColorStop(.45,"rgba(46,65,88,.07)");
  gradient.addColorStop(1,"rgba(46,65,88,0)");
  ctx.fillStyle=gradient; ctx.fillRect(0,0,128,128);
  const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
  const shadowMaterial = new THREE.MeshBasicMaterial({ map:shadowTexture, transparent:true, depthWrite:false, toneMapped:false });
  const shadowGeometry = new THREE.PlaneGeometry(8.0,3.4);
  geometries.add(shadowGeometry); materials.add(shadowMaterial);
  const shadow = new THREE.Mesh(shadowGeometry,shadowMaterial);
  shadow.rotation.x=-Math.PI/2; shadow.position.set(.1,-2.03,0); scene.add(shadow);

  const overlays = names.map(name => ({ name, element:figure.querySelector<HTMLElement>(`[data-surface="${name}"]`)!, width:LAYERS[name].width*100, height:LAYERS[name].height*100 }));
  for (const overlay of overlays) { overlay.element.style.width=`${overlay.width}px`; overlay.element.style.height=`${overlay.height}px`; }
  let width=1,height=1,time=0,startedAt=0,running=false,disposed=false,revealed=false,frameCount=0,visible=true;
  const point = new THREE.Vector3();
  function project(group:THREE.Group,x:number,y:number,z:number) {
    point.set(x,y,z).applyMatrix4(group.matrixWorld).project(camera);
    return {x:(point.x+1)*width/2,y:(1-point.y)*height/2};
  }
  function syncOverlays() {
    scene.updateMatrixWorld(true);
    for (const {name,element,width:cssWidth,height:cssHeight} of overlays) {
      const c=LAYERS[name],group=groups[name],z=c.depth/2+.008;
      const origin=project(group,-c.width/2,c.height/2,z);
      const right=project(group,c.width/2,c.height/2,z);
      const bottom=project(group,-c.width/2,-c.height/2,z);
      const a=(right.x-origin.x)/cssWidth,b=(right.y-origin.y)/cssWidth;
      const cc=(bottom.x-origin.x)/cssHeight,d=(bottom.y-origin.y)/cssHeight;
      element.style.transform=`matrix(${a},${b},${cc},${d},${origin.x},${origin.y})`;
      element.style.zIndex=String(names.indexOf(name)+1);
      element.style.clipPath="none";
      const nextName=names[names.indexOf(name)+1];
      if (nextName && groups[nextName].visible) {
        const front=LAYERS[nextName],fg=groups[nextName],det=a*d-b*cc;
        const corners=[[-front.width/2,front.height/2],[front.width/2,front.height/2],[front.width/2,-front.height/2],[-front.width/2,-front.height/2]].map(([x,y])=>{
          const p=project(fg,x,y,front.depth/2);
          return `${((d*(p.x-origin.x)-cc*(p.y-origin.y))/det).toFixed(2)} ${((-b*(p.x-origin.x)+a*(p.y-origin.y))/det).toFixed(2)}`;
        });
        element.style.clipPath=`path(evenodd, 'M0 0H${cssWidth}V${cssHeight}H0Z M${corners.join("L")}Z')`;
      }
    }
  }
  function updatePose(seconds:number) {
    time=seconds;
    for (const name of names) {
      const state=layerStateAt(name,seconds),group=groups[name];
      group.position.set(...state.position); group.rotation.set(state.rotationX,state.rotationY,0);
      group.visible=state.opacity>.001;
      solids[name].castShadow=state.opacity>.99;
      for (const material of faces[name]) { material.opacity=state.opacity; material.depthWrite=state.opacity>.99; }
      const el=overlays.find(item=>item.name===name)!.element;
      el.style.opacity=String(state.opacity);
    }
    seats.forEach(seat=>{seat.visible=seconds>=7.15;seat.scale.z=.4+.6*revealAt(seconds,7.15,1.25);});
    shadowMaterial.opacity=.30+.70*revealAt(seconds,4.05,3.10);
    const vars:Record<string,number>={
      "data-0":revealAt(seconds,.52),"data-1":revealAt(seconds,.90),"data-2":revealAt(seconds,1.28),
      "rule-0":revealAt(seconds,2.50),"rule-1":revealAt(seconds,2.98),"rule-2":revealAt(seconds,3.46),
      "web-content":revealAt(seconds,4.55),"web-result":revealAt(seconds,5.12,.65),
      "mobile-content":revealAt(seconds,6.24),"mobile-result":revealAt(seconds,6.65,.55),
    };
    for (const [name,value] of Object.entries(vars)) figure.style.setProperty(`--${name}`,String(value));
    figure.dataset.phase=phaseAt(seconds); figure.dataset.time=seconds.toFixed(3);
    figure.dataset.layers=names.filter(name=>groups[name].visible).join(",");
    syncOverlays();
  }
  function render() {
    if(disposed)return;
    renderer.render(scene,camera); frameCount++;
    figure.dataset.frames=String(frameCount);
    figure.dataset.drawCalls=String(renderer.info.render.calls);
    figure.dataset.triangles=String(renderer.info.render.triangles);
  }

  // Fit all motion poses in camera space, including opened panel corners.
  // One stable frame; no zoom jump between phases or on F5.
  const bounds=new THREE.Box3();
  for(const seconds of [0,.7,1.9,2.4,3.7,4.7,5.6,6.6,7.15,DURATION]) {
    for(const name of names) {
      const c=LAYERS[name],state=layerStateAt(name,seconds);
      if(state.opacity<.001)continue;
      const matrix=new THREE.Matrix4().compose(new THREE.Vector3(...state.position),new THREE.Quaternion().setFromEuler(new THREE.Euler(state.rotationX,state.rotationY,0)),new THREE.Vector3(1,1,1));
      for(const x of [-c.width/2-.02,c.width/2+.02])for(const y of [-c.height/2-.02,c.height/2+.02])for(const z of [-c.depth/2,c.depth/2]) {
        point.set(x,y,z).applyMatrix4(matrix).applyMatrix4(camera.matrixWorldInverse);bounds.expandByPoint(point);
      }
    }
  }
  const center=bounds.getCenter(new THREE.Vector3()),extent=bounds.getSize(new THREE.Vector3());
  function resize() {
    if(disposed)return;
    const rect=figure.getBoundingClientRect();width=Math.max(1,rect.width);height=Math.max(1,rect.height);
    const aspect=width/height,viewHeight=Math.max(extent.y*1.14,extent.x*1.12/aspect);
    camera.left=center.x-viewHeight*aspect/2;camera.right=center.x+viewHeight*aspect/2;
    camera.top=center.y+viewHeight/2;camera.bottom=center.y-viewHeight/2;
    camera.updateProjectionMatrix();renderer.setSize(width,height,false);
    updatePose(time);render();
  }
  function finish() {
    if(disposed)return;
    running=false;renderer.setAnimationLoop(null);updatePose(DURATION);render();
    figure.dataset.running="false";status.textContent="Tamamlandı / sabit görünüm";settle.textContent="Son görünüm";
  }
  function play() {
    if(disposed||!revealed)return;
    if(document.hidden||!visible){finish();return;}
    renderer.setAnimationLoop(null);updatePose(0);render();
    startedAt=performance.now();running=true;figure.dataset.running="true";
    status.textContent="Veri, kurallar ve arayüzler oluşuyor";settle.textContent="Hareketi atla";
    renderer.setAnimationLoop(now=>{
      if(!running||disposed)return;
      const elapsed=(now-startedAt)/1000;
      if(elapsed>=DURATION){finish();return;}
      updatePose(elapsed);render();
    });
  }
  function visibility(){if(document.hidden&&running)finish();}
  function lost(event:Event){event.preventDefault();renderer.setAnimationLoop(null);onFailure();}
  replay.addEventListener("click",play);settle.addEventListener("click",finish);
  document.addEventListener("visibilitychange",visibility);
  renderer.domElement.addEventListener("webglcontextlost",lost);
  const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(figure);
  const intersection=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(!visible&&running)finish();});
  intersection.observe(figure);

  const ready=(async()=>{
    // Prepare every material while canvas and HTML are still hidden.
    await document.fonts.ready;
    if(disposed)return false;
    updatePose(DURATION);await renderer.compileAsync(scene,camera);
    if(disposed)return false;
    time=0;resize();
    await new Promise<void>(resolve=>requestAnimationFrame(()=>resolve()));
    if(disposed)return false;
    updatePose(0);render();figure.dataset.firstPose="0.000";
    return true;
  })();
  return {ready,reveal(){
    if(disposed)return;
    host.hidden=overlayHost.hidden=false;
    figure.dataset.ready="true";figure.dataset.mode="webgl";
    revealed=true;replay.disabled=settle.disabled=false;play();
  },dispose(){
    if(disposed)return;disposed=true;running=false;renderer.setAnimationLoop(null);
    resizeObserver.disconnect();intersection.disconnect();
    replay.removeEventListener("click",play);settle.removeEventListener("click",finish);
    document.removeEventListener("visibilitychange",visibility);renderer.domElement.removeEventListener("webglcontextlost",lost);
    geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());
    shadowTexture.dispose();environment.dispose();key.shadow.dispose();renderer.dispose();renderer.domElement.remove();figure.dataset.running="false";
  }};
}
