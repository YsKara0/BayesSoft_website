import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, SoftShadows } from "@react-three/drei";
import { ACESFilmicToneMapping, Group, Mesh, Vector3 } from "three";
import { createResources } from "./resources";
import type { Resources } from "./resources";
import { mechanismPose, REST_SECONDS, TRANSITION_SECONDS } from "./motion";

export type Configuration = 0 | 1;
export type SceneProps = {
  playing: boolean;
  automatic: boolean;
  reduced: boolean;
  active: boolean;
  request: { token: number; target: Configuration };
  initial: Configuration;
  onReady: () => void;
  onStable: (state: Configuration) => void;
  onManualComplete: () => void;
  onFailure: () => void;
};

type BlockProps = {
  resources: Resources;
  position: [number, number, number];
  size: [number, number, number];
  color?: keyof Resources["materials"];
};

function Block({ resources, position, size, color = "white" }: BlockProps) {
  return <mesh geometry={resources.geometries.unit} material={resources.materials[color]}
    position={position} scale={size} castShadow receiveShadow />;
}

function ContentCard({ resources }: { resources: Resources }) {
  return <>
    <mesh geometry={resources.geometries.card} material={resources.materials.white} castShadow receiveShadow />
    <Block resources={resources} position={[-0.17, 0.21, 0.026]} size={[0.11, 0.10, 0.012]} color="blue" />
    <Block resources={resources} position={[0.06, 0.23, 0.026]} size={[0.22, 0.035, 0.012]} color="ink" />
    {[0.03, -0.09, -0.21].map((y, index) => <Block key={y} resources={resources}
      position={[-0.02, y, 0.026]} size={[index === 2 ? 0.28 : 0.43, 0.042, 0.012]} color="line" />)}
  </>;
}

function Wing({ side, resources }: { side: -1 | 1; resources: Resources }) {
  const depthOffset = side === -1 ? 0.065 : 0.135;
  const x = side * 0.605;
  return <>
    <mesh position={[x, 0, depthOffset]} geometry={resources.geometries.wing}
      material={resources.materials.white} castShadow receiveShadow />
    <Block resources={resources} position={[x, 0, depthOffset + 0.043]} size={[1.01, 2.31, 0.012]} color="face" />
    <Block resources={resources} position={[side * 0.045, 0, depthOffset * 0.5]}
      size={[0.13, 2.28, depthOffset + 0.025]} color="mineral" />
    {side === -1 ? [0.82, 0.41, 0, -0.41, -0.82].map((y, index) => <group key={y}>
      <Block resources={resources} position={[x, y, depthOffset + 0.059]} size={[0.84, 0.29, 0.016]} />
      <Block resources={resources} position={[x - 0.29, y, depthOffset + 0.075]}
        size={[0.055, 0.12, 0.012]} color={index === 0 ? "blue" : "line"} />
      <Block resources={resources} position={[x + 0.015, y + 0.015, depthOffset + 0.075]}
        size={[0.45, 0.04, 0.012]} color="line" />
    </group>) : <>
      <Block resources={resources} position={[x, 0.26, depthOffset + 0.060]} size={[0.84, 1.27, 0.024]} />
      <Block resources={resources} position={[x, 0.55, depthOffset + 0.083]} size={[0.57, 0.39, 0.017]} color="line" />
      <Block resources={resources} position={[x - 0.1, 0.15, depthOffset + 0.083]} size={[0.38, 0.045, 0.017]} color="ink" />
      <Block resources={resources} position={[x, -0.04, depthOffset + 0.083]} size={[0.57, 0.04, 0.017]} color="line" />
      <Block resources={resources} position={[x, -0.62, depthOffset + 0.060]} size={[0.72, 0.055, 0.017]} color="line" />
      <Block resources={resources} position={[x - 0.14, -0.85, depthOffset + 0.060]} size={[0.44, 0.055, 0.017]} color="line" />
    </>}
  </>;
}

function Mechanism(props: SceneProps) {
  const { request, playing, automatic, reduced, active } = props;
  const resources = useMemo(createResources, []);
  const left = useRef<Group>(null);
  const right = useRef<Group>(null);
  const railLeft = useRef<Group>(null);
  const railRight = useRef<Group>(null);
  const cards = useRef<(Group | null)[]>([]);
  const latches = useRef<(Mesh | null)[]>([]);
  const progress = useRef<number>(props.initial);
  const target = useRef<Configuration>(props.initial);
  const requestToken = useRef(props.request.token);
  const lastStable = useRef<Configuration | null>(null);
  const ready = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const invalidate = useThree((state) => state.invalidate);

  const clearRest = () => {
    if (timer.current !== null) clearTimeout(timer.current);
    timer.current = null;
  };

  useEffect(() => () => { clearRest(); resources.dispose(); }, [resources]);

  useEffect(() => {
    if (requestToken.current !== request.token) {
      requestToken.current = request.token;
      target.current = request.target;
      lastStable.current = null;
    }
    clearRest();
    invalidate();
  }, [request, playing, automatic, reduced, active, invalidate]);

  useFrame((state, delta) => {
    const moving = props.playing && props.active && !props.reduced;
    if (props.reduced) progress.current = target.current;
    else if (moving) {
      const step = Math.min(delta, 0.05) / TRANSITION_SECONDS;
      progress.current += Math.max(-step, Math.min(step, target.current - progress.current));
    }
    const pose = mechanismPose(progress.current);
    if (left.current) left.current.rotation.y = pose.leftAngle;
    if (right.current) right.current.rotation.y = pose.rightAngle;
    if (railLeft.current) railLeft.current.position.x = -0.30 - 1.04 * pose.railExtension;
    if (railRight.current) railRight.current.position.x = 0.30 + 1.04 * pose.railExtension;
    [pose.leftCard, pose.rightCard].forEach(([x, y], index) => cards.current[index]?.position.set(x, 1.66 + y, 0.094));
    latches.current.forEach((latch) => { if (latch) latch.position.y = 2.86 + pose.latchLift; });
    const stage = state.gl.domElement.closest<HTMLElement>(".kinetic-stage");
    if (stage) {
      stage.dataset.progress = progress.current.toFixed(3);
      stage.dataset.configuration = progress.current === 0 ? "wide" : progress.current === 1 ? "compact" : "transition";
    }
    if (!ready.current) { ready.current = true; props.onReady(); }
    const arrived = Math.abs(progress.current - target.current) < 0.000001;
    if (arrived && lastStable.current !== target.current) {
      lastStable.current = target.current;
      props.onStable(target.current);
      if (!props.automatic && props.playing) props.onManualComplete();
    }
    if (!arrived && moving) invalidate();
    if (arrived && moving && props.automatic && timer.current === null) {
      // Stable states rest without continuously rendering identical frames.
      timer.current = setTimeout(() => {
        timer.current = null;
        target.current = target.current === 0 ? 1 : 0;
        invalidate();
      }, REST_SECONDS * 1000);
    }
  });

  return <group>
    <Block resources={resources} position={[0, 0.10, 0]} size={[1.86, 0.17, 0.97]} />
    <Block resources={resources} position={[0, 0.27, 0]} size={[1.35, 0.23, 0.39]} color="mineral" />
    <Block resources={resources} position={[0, 0.21, -0.02]} size={[1.91, 0.10, 0.86]} color="face" />
    <group ref={railLeft} position={[-1.34, 0.19, -0.21]}>
      <Block resources={resources} position={[0, 0, 0]} size={[1.16, 0.10, 0.31]} color="mineral" />
      <Block resources={resources} position={[0, 0.057, 0]} size={[1.04, 0.015, 0.06]} color="ink" />
    </group>
    <group ref={railRight} position={[1.34, 0.19, 0.21]}>
      <Block resources={resources} position={[0, 0, 0]} size={[1.16, 0.10, 0.31]} color="mineral" />
      <Block resources={resources} position={[0, 0.057, 0]} size={[1.04, 0.015, 0.06]} color="ink" />
    </group>
    <mesh position={[0, 1.66, 0]} geometry={resources.geometries.core} material={resources.materials.white} castShadow receiveShadow />
    <Block resources={resources} position={[0, 1.66, 0.057]} size={[1.48, 2.31, 0.012]} color="face" />
    {[-0.335, 0, 0.335].map((x) => <Block key={x} resources={resources}
      position={[x, 1.76, 0.068]} size={[0.015, 1.20, 0.008]} color="line" />)}
    {[1.30, 1.76, 2.22].map((y) => <Block key={y} resources={resources}
      position={[0, y, 0.068]} size={[0.78, 0.015, 0.008]} color="line" />)}
    <Block resources={resources} position={[-0.08, 2.69, 0.074]} size={[1.01, 0.07, 0.015]} color="ink" />
    <Block resources={resources} position={[0.59, 2.69, 0.074]} size={[0.09, 0.09, 0.015]} color="blue" />
    <Block resources={resources} position={[0, 0.62, 0.074]} size={[1.0, 0.15, 0.022]} color="blue" />
    {[0, 1].map((index) => <group key={index} ref={(group) => { cards.current[index] = group; }}>
      <ContentCard resources={resources} />
    </group>)}
    {([-1, 1] as const).map((side, index) => {
      const hingeZ = side === -1 ? -0.065 : -0.135;
      return <group key={side}>
        <Block resources={resources} position={[side * 0.80, 1.66, hingeZ / 2]}
          size={[0.12, 2.28, Math.abs(hingeZ) + 0.075]} color="mineral" />
        <mesh position={[side * 0.85, 1.66, hingeZ]} geometry={resources.geometries.shaft}
          material={resources.materials.mineral} castShadow />
        <mesh position={[side * 0.85, 0.46, hingeZ]} geometry={resources.geometries.collar}
          material={resources.materials.ink} castShadow />
        <mesh ref={(mesh) => { latches.current[index] = mesh; }} position={[side * 0.85, 2.86, hingeZ]}
          geometry={resources.geometries.collar} material={resources.materials.blue} castShadow />
        <group ref={side === -1 ? left : right} position={[side * 0.85, 1.66, hingeZ]}>
          <Wing side={side} resources={resources} />
        </group>
      </group>;
    })}
  </group>;
}

function Studio({ onFailure }: { onFailure: () => void }) {
  const { size, camera, gl, invalidate } = useThree();
  const focus = useMemo(() => new Vector3(0, 1.48, -0.16), []);
  useEffect(() => {
    camera.zoom = Math.min(size.width / (size.width < 600 ? 5.3 : 6.4), size.height / 4.3);
    camera.lookAt(focus);
    camera.updateProjectionMatrix();
    invalidate();
  }, [size, camera, focus, invalidate]);
  useEffect(() => {
    const canvas = gl.domElement;
    const lost = (event: Event) => { event.preventDefault(); onFailure(); };
    canvas.addEventListener("webglcontextlost", lost);
    return () => canvas.removeEventListener("webglcontextlost", lost);
  }, [gl, onFailure]);
  return null;
}

export function Scene(props: SceneProps) {
  return <Canvas orthographic frameloop="demand" shadows dpr={[1, 1.5]}
    camera={{ position: [5.5, 4.1, 9], zoom: 110, near: 0.1, far: 40 }}
    gl={{ antialias: true, alpha: true, toneMapping: ACESFilmicToneMapping }}>
    <Studio onFailure={props.onFailure} />
    <SoftShadows size={18} samples={10} />
    <ambientLight intensity={0.4} />
    <directionalLight position={[-3, 8, 5]} intensity={2.5} color="#fff8ee" castShadow
      shadow-mapSize={[1024, 1024]} shadow-camera-left={-4} shadow-camera-right={4}
      shadow-camera-top={4} shadow-camera-bottom={-4} shadow-camera-far={18}
      shadow-normalBias={0.025} shadow-bias={-0.0001} />
    <directionalLight position={[4, 4, -3]} intensity={1.0} color="#e6eef5" />
    <Environment frames={1} resolution={128}>
      <Lightformer form="rect" intensity={3} position={[-3, 5, 3]} scale={[6, 6, 1]} rotation={[-Math.PI / 4, 0, 0]} />
      <Lightformer form="rect" intensity={1.6} color="#e6eef5" position={[4, 2, -3]} scale={[4, 5, 1]} rotation={[0, Math.PI / 2, 0]} />
    </Environment>
    <Mechanism {...props} />
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <shadowMaterial transparent color="#626c69" opacity={0.25} />
    </mesh>
  </Canvas>;
}
