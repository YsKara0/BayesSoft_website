import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, SoftShadows } from "@react-three/drei";
import { ACESFilmicToneMapping, Mesh, Vector3 } from "three";
import { MODULES, createModuleGeometry } from "./geometry";
import { ASSEMBLED_TIME, LOOP_SECONDS, phaseAt, separationAt } from "./motion";

export type SceneProps = {
  playing: boolean;
  reduced: boolean;
  staticView: boolean;
  active: boolean;
  pointerCamera: boolean;
  onReady: () => void;
  onContextLost: () => void;
};

function Sculpture({ playing, reduced, staticView, active, pointerCamera, onReady }: SceneProps) {
  const pieces = useRef<(Mesh | null)[]>([]);
  const time = useRef(0);
  const ready = useRef(false);
  const lookAt = useMemo(() => new Vector3(0, 1.35, 0), []);
  const modules = useMemo(() => MODULES.map(createModuleGeometry), []);
  const { size, invalidate } = useThree();
  const compact = size.width < 600;

  useEffect(() => {
    if (staticView || reduced) time.current = ASSEMBLED_TIME;
    invalidate();
  }, [playing, reduced, staticView, active, size, invalidate]);

  useEffect(() => () => modules.forEach(({ geometry }) => geometry.dispose()), [modules]);

  useFrame((state, delta) => {
    if (playing && !reduced && active) time.current = (time.current + Math.min(delta, 0.05)) % LOOP_SECONDS;
    const poseTime = reduced || staticView ? ASSEMBLED_TIME : time.current;
    const travelScale = compact ? 0.7 : 1;
    MODULES.forEach((module, index) => {
      const mesh = pieces.current[index];
      if (!mesh) return;
      const s = separationAt(poseTime, module.arrival, module.departure);
      const [x, y, z] = modules[index].center;
      mesh.position.set(x + module.offset[0] * s * travelScale,
        y + module.offset[1] * s * travelScale + Math.sin(s * Math.PI) * 0.12,
        z + module.offset[2] * s * travelScale);
      mesh.rotation.set(module.rotation[0] * s, module.rotation[1] * s, module.rotation[2] * s);
    });

    // A tiny response in the camera, with a fixed target. No orbit controls or
    // touch interception. Motion and pointer response share the pause control.
    const cameraMoves = pointerCamera && !compact && playing && !reduced && active;
    const targetX = cameraMoves ? 6.8 + state.pointer.x * 0.23 : state.camera.position.x;
    const targetY = cameraMoves ? 5.0 + state.pointer.y * 0.12 : state.camera.position.y;
    const damping = 1 - Math.exp(-delta * 3);
    const unsettled = Math.abs(state.camera.position.x - targetX) + Math.abs(state.camera.position.y - targetY) > 0.002;
    state.camera.position.x += (targetX - state.camera.position.x) * damping;
    state.camera.position.y += (targetY - state.camera.position.y) * damping;
    if (reduced) state.camera.position.set(6.8, 5.0, 8.2);
    state.camera.lookAt(lookAt);

    const stage = state.gl.domElement.closest<HTMLElement>(".stage");
    if (stage) {
      stage.dataset.phase = phaseAt(poseTime);
      stage.dataset.cycle = poseTime.toFixed(2);
    }
    if (!ready.current) { ready.current = true; onReady(); }
    if (active && ((playing && !reduced) || unsettled)) invalidate();
  });

  return (
    <group>
      {MODULES.map((module, index) => (
        <mesh key={module.name} ref={(mesh) => { pieces.current[index] = mesh; }}
          geometry={modules[index].geometry} castShadow receiveShadow>
          <meshPhysicalMaterial color={module.color} roughness={index === 1 ? 0.52 : 0.34}
            metalness={index === 3 ? 0.12 : 0.04} clearcoat={index === 1 ? 0 : 0.18}
            clearcoatRoughness={0.45} />
        </mesh>
      ))}
    </group>
  );
}

function StudioCamera() {
  const { size, camera, invalidate } = useThree();
  useEffect(() => {
    // Fixed world-space frame, sized for the entire separated path.
    if ("isOrthographicCamera" in camera) {
      camera.zoom = Math.min(size.width / (size.width < 600 ? 6.4 : 7.5), size.height / 6.1);
      camera.updateProjectionMatrix();
      invalidate();
    }
  }, [size, camera, invalidate]);
  return null;
}

function ContextWatch({ onContextLost }: Pick<SceneProps, "onContextLost">) {
  const gl = useThree((state) => state.gl);
  useEffect(() => {
    const canvas = gl.domElement;
    const handleLoss = (event: Event) => { event.preventDefault(); onContextLost(); };
    canvas.addEventListener("webglcontextlost", handleLoss);
    return () => canvas.removeEventListener("webglcontextlost", handleLoss);
  }, [gl, onContextLost]);
  return null;
}

export function Scene(props: SceneProps) {
  return (
    <Canvas orthographic frameloop="demand" shadows dpr={[1, 1.5]}
      camera={{ position: [6.8, 5.0, 8.2], near: 0.1, far: 50, zoom: 100 }}
      gl={{ antialias: true, alpha: true, toneMapping: ACESFilmicToneMapping }}>
      <StudioCamera />
      <ContextWatch onContextLost={props.onContextLost} />
      <SoftShadows size={20} samples={12} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[-3, 9, 4]} intensity={3.2} color="#fff4e4" castShadow
        shadow-mapSize={[1024, 1024]} shadow-camera-left={-5} shadow-camera-right={5}
        shadow-camera-top={5} shadow-camera-bottom={-5} shadow-camera-far={20}
        shadow-normalBias={0.035} shadow-bias={-0.0001} />
      <directionalLight position={[4, 3, -4]} intensity={1.0} color="#e5edff" />
      <Environment frames={1} resolution={128}>
        <Lightformer form="rect" intensity={3} color="#ffffff" position={[-3, 5, 3]}
          scale={[6, 6, 1]} rotation={[-Math.PI / 4, 0, 0]} />
        <Lightformer form="rect" intensity={1.5} color="#e4ecf4" position={[4, 2, -3]}
          scale={[4, 5, 1]} rotation={[0, Math.PI / 2, 0]} />
        <Lightformer form="rect" intensity={1} color="#f2e8da" position={[-4, 0, -4]}
          scale={[3, 4, 1]} rotation={[0, Math.PI / 4, 0]} />
      </Environment>
      <Sculpture {...props} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[200, 200]} />
        <shadowMaterial transparent color="#5d574d" opacity={0.28} />
      </mesh>
    </Canvas>
  );
}
