import React, {
  Suspense,
  useMemo,
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MeshStandardMaterial } from "three";
import { NavContext } from "../NavContext";
import * as THREE from "three";

const Model = (props) => {
  const groupRef = useRef();
  const { nodes } = useGLTF("./static/models/earthModel.glb");
  const { showAbout, showPortfolio, showTeam, showContact } =
    useContext(NavContext);
  const [currentPosition, setCurrentPosition] = useState([0, 0, 0]);
  const [scale, setScale] = useState(0.018);

  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.05;

    // Get the target position based on the state of the context
    let targetPosition = [0, 0, 0];
    if (showAbout) {
      targetPosition = [-0.75, 0, 0];
    } else if (showPortfolio) {
      targetPosition = [0.75, 0, 0];
    } else if (showTeam) {
      targetPosition = [0, -1, 0];
    } else if (showContact) {
      targetPosition = [0, 1, 0];
    }

    // Move the model towards the target position
    const duration = 3; // Adjust this value to control the duration of the animation
    const t = Math.min(1.0, delta / duration);
    const smoothstep = (x) => x * x * (3 - 2 * x);
    const easeT = smoothstep(t);
    const speed = THREE.MathUtils.lerp(1.5, 1.5, easeT); // Adjust these values to control the start and end speeds of the animation
    const newPosition = currentPosition.map((coord, index) =>
      THREE.MathUtils.lerp(coord, targetPosition[index], delta * speed)
    );
    setCurrentPosition(newPosition);
    groupRef.current.position.set(...newPosition);
  });

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768; // Change the breakpoint according to your needs
      if (isMobile) {
        setScale(0.01); // Adjust this value to change the scale on mobile viewports
      } else {
        setScale(0.018); // Adjust this value to change the scale on desktop viewports
      }
    };

    handleResize(); // Call it once to set the initial value

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const material = useMemo(
    () => new MeshStandardMaterial({ color: "#ffffff", roughness: 1 }),
    []
  );

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Earth_dry_elevation.geometry}
        material={nodes.Earth_dry_elevation.material}
        position={[0, 0, 0]}
        scale={scale}
      />
    </group>
  );
};

const Scene = () => {
  const controlsRef = useRef();

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 10 }}
      style={{
        minHeight: "100%",
        height: "100%",
        width: "100%",
        zIndex: -100,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <spotLight position={[-100, 100, 0]} intensity={0.25} />
      <Suspense>
        <Model position={[0, 0, 0]} />
      </Suspense>
      <OrbitControls
        ref={controlsRef}
        minPolarAngle={Math.PI / 2 - 0.1}
        maxPolarAngle={Math.PI / 2 - 0.1}
      />
    </Canvas>
  );
};

useGLTF.preload("./static/models/earthModel.glb");
export default Scene;
