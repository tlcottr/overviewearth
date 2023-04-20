import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { extend } from "@react-three/fiber";
import { HTML } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

// Extend the HTML element to create a custom element called MyCustomElement
extend({ HTML });

const Model = (props) => {
  const groupRef = useRef();
  const { nodes } = useGLTF("./static/models/earthModel.glb");
  console.log("useGLTF called");

  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.05;
  });

  const material = useMemo(
    () => new MeshStandardMaterial({ color: "#eeeeee", roughness: 1 }),
    []
  );

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Earth_Glass.geometry}
        material={material}
        position={[0, 0, 0]}
        scale={1}
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
        width: "100vw",
        height: "100vh",
        zIndex: -100,
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <directionalLight position={[-200, 200, 10]} intensity={0.25} />
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

export default Scene;
