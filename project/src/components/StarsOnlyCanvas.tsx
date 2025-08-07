import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const StarsOnlyCanvas: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
      </Suspense>
    </Canvas>
  );
};

export default StarsOnlyCanvas;
