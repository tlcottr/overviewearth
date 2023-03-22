import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Html,
  useProgress,
} from "@react-three/drei";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { extend } from "@react-three/fiber";
import { HTML } from "@react-three/drei";

// Extend the HTML element to create a custom element called MyCustomElement
extend({ HTML });

const Loader = () => {
  return (
    <Html>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            border: "2px solid white",
            borderTop: "2px solid gray",
            animation: "spin 1s linear infinite",
          }}
        ></div>
      </div>
    </Html>
  );
};

const Model = (props) => {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("./static/images/earthModel.glb");
  console.log("useGLTF called");

  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.2;
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Earth_Glass.geometry}
        material={materials["Clay Light"]}
        position={[0, 0, 0]}
        scale={0.5}
      />
    </group>
  );
};

useGLTF.preload("./static/images/earthModel.glb");

const Scene = () => {
  const controlsRef = useRef();

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 10 }}
      style={{
        width: "100vw",
        height: "100vh",
        zIndex: 1000,
      }}
    >
      <directionalLight position={[0, 10, 10]} intensity={0.5} />
      <Suspense fallback={<Loader />}>
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
