import { Canvas, useFrame, } from "@react-three/fiber";
import { useState, useRef, } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";


const Sphere = () => {

  return (
    <mesh 
    rotation-x={1}
    scale={3}
    rotation={[Math.PI / 2, 0, 0]}
    >
      <ambientLight intensity={.01} />
      <directionalLight  color="green" position={[10, 10, 11]} />
      <sphereGeometry args={[1, 32]}/>
      <meshPhysicalMaterial />
    </mesh>
  );
};

const SphereCanvas = () => {
  return (
    <Canvas
    camera={{ fov: 75, position: [0, 0, 5] }}
    shadows={true}
    resize={{ scroll: true}}
    >
      
      <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      <Sphere />
    </Canvas>
  );
};

export default SphereCanvas;
