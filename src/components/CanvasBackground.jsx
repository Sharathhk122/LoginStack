// CanvasBackground.jsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Text3D } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

const Scene = () => {
  const dodecahedronRef = useRef();
  const textRef = useRef();

  useFrame(({ clock }) => {
    if (dodecahedronRef.current) {
      dodecahedronRef.current.rotation.x = clock.getElapsedTime() * 0.1;
      dodecahedronRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
    if (textRef.current) {
      textRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2 + 2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#c77dff" />
      <pointLight position={[-10, -10, -10]} intensity={0.7} color="#7b2cbf" />
      
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={dodecahedronRef} position={[0, 0, 0]}>
          <dodecahedronGeometry args={[2, 0]} />
          <meshStandardMaterial
            color="#9d4edd"
            emissive="#7b2cbf"
            emissiveIntensity={0.8}
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
      </Float>

      <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
        <Text3D
          ref={textRef}
          font="https://drei.pmnd.rs/fonts/helvetiker_regular.typeface.json"
          size={0.8}
          height={0.2}
          curveSegments={12}
          position={[-4, 2, -5]}
          rotation={[0, 0.3, 0]}
        >
          AUTH
          <meshStandardMaterial color="#e0aaff" emissive="#c77dff" emissiveIntensity={0.5} />
        </Text3D>
      </Float>

      <Stars 
        radius={150} 
        depth={60} 
        count={10000} 
        factor={6} 
        saturation={1} 
        fade 
        speed={3} 
      />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 6}
      />

      <EffectComposer>
        <Bloom
          intensity={1.8}
          kernelSize={4}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.7}
        />
      </EffectComposer>
    </>
  );
};

export const CanvasBackground = () => (
  <Canvas
    camera={{ position: [0, 0, 15], fov: 60 }}
    gl={{ antialias: true, alpha: true }}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
    }}
  >
    <Scene />
  </Canvas>
);