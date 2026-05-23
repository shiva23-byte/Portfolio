import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Box, Sphere, Cylinder, MeshDistortMaterial, OrbitControls } from '@react-three/drei';

const Robot = ({ color = '#0ea5e9' }) => {
  const group = useRef();

  useFrame((state) => {
    // Gentle floating rotation
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 2) * 0.3;
    group.current.rotation.z = Math.sin(t / 3) * 0.1;
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
        {/* Head */}
        <Box args={[1.5, 1.2, 1.2]} position={[0, 1.2, 0]} radius={0.2}>
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
        </Box>

        {/* Eyes */}
        <Sphere args={[0.2, 16, 16]} position={[-0.4, 1.3, 0.62]}>
          <meshBasicMaterial color={color} />
        </Sphere>
        <Sphere args={[0.2, 16, 16]} position={[0.4, 1.3, 0.62]}>
          <meshBasicMaterial color={color} />
        </Sphere>

        {/* Antenna */}
        <Cylinder args={[0.05, 0.05, 0.5]} position={[0, 2, 0]}>
          <meshStandardMaterial color="#888" />
        </Cylinder>
        <Sphere args={[0.15, 16, 16]} position={[0, 2.3, 0]}>
          <meshBasicMaterial color={color} />
        </Sphere>

        {/* Body */}
        <Cylinder args={[0.6, 0.8, 1.5]} position={[0, -0.3, 0]}>
          <meshStandardMaterial color="#111" metalness={0.6} roughness={0.4} />
        </Cylinder>

        {/* Energy Core */}
        <Sphere args={[0.3, 32, 32]} position={[0, -0.2, 0.75]}>
          <MeshDistortMaterial color={color} distort={0.4} speed={4} emissive={color} emissiveIntensity={2} />
        </Sphere>
      </Float>
    </group>
  );
};

export const ThreeDCharacterCanvas = ({ color, style }) => {
  return (
    <div style={{ position: 'absolute', width: '300px', height: '400px', zIndex: 0, pointerEvents: 'none', ...style }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} intensity={1} color={color} />
        <Robot color={color} />
      </Canvas>
    </div>
  );
};
