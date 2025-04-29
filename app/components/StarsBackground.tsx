"use client";

import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";

const StarsBackground = () => {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <Canvas>
        <ambientLight intensity={0.5} />
        <Sparkles
          count={400}
          speed={0.4}
          opacity={1}
          scale={[15, 15, 15]}
          size={1.8}
          color="white"
        />
      </Canvas>
    </div>
  );
};

export default StarsBackground;
