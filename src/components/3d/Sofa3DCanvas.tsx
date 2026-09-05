"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, ContactShadows, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function Furniture3DModel({ rotateSpeed = 0.5 }: { rotateSpeed?: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2 * rotateSpeed;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* Sofa Main Base / Cushion - Curved Organic Form */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.8, 0.45, 1.2]} />
        <meshStandardMaterial
          color="#EFECE4"
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      {/* Main Backrest */}
      <mesh position={[0, 0.45, -0.4]} castShadow receiveShadow>
        <boxGeometry args={[2.8, 0.6, 0.4]} />
        <meshStandardMaterial
          color="#EFECE4"
          roughness={0.85}
        />
      </mesh>

      {/* Left Armrest */}
      <mesh position={[-1.3, 0.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.3, 0.5, 1.2]} />
        <meshStandardMaterial
          color="#EFECE4"
          roughness={0.85}
        />
      </mesh>

      {/* Right Armrest */}
      <mesh position={[1.3, 0.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.3, 0.5, 1.2]} />
        <meshStandardMaterial
          color="#EFECE4"
          roughness={0.85}
        />
      </mesh>

      {/* Accent Cushions */}
      <mesh position={[-0.8, 0.4, -0.1]} rotation={[0, 0.2, 0]} castShadow>
        <boxGeometry args={[0.5, 0.5, 0.2]} />
        <meshStandardMaterial color="#9A7B56" roughness={0.6} />
      </mesh>

      <mesh position={[0.8, 0.4, -0.1]} rotation={[0, -0.2, 0]} castShadow>
        <boxGeometry args={[0.5, 0.5, 0.2]} />
        <meshStandardMaterial color="#656D4A" roughness={0.6} />
      </mesh>

      {/* Wood Base Legs (4 corners) */}
      {[
        [-1.3, -0.3, 0.5],
        [1.3, -0.3, 0.5],
        [-1.3, -0.3, -0.5],
        [1.3, -0.3, -0.5],
      ].map((pos, idx) => (
        <mesh key={idx} position={pos as [number, number, number]} castShadow>
          <cylinderGeometry args={[0.06, 0.04, 0.2, 16]} />
          <meshStandardMaterial color="#9A7B56" roughness={0.3} metalness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

export default function Sofa3DCanvas() {
  const [isRotating, setIsRotating] = useState(true);

  return (
    <div className="relative w-full h-[380px] sm:h-[480px] bg-[#EFECE4]/50 rounded-3xl border border-[#1C1917]/10 overflow-hidden shadow-inner group">
      {/* 3D Scene */}
      <Canvas shadows className="w-full h-full cursor-grab active:cursor-grabbing">
        <PerspectiveCamera makeDefault position={[3, 2, 4]} fov={45} />
        <ambientLight intensity={1.2} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.8}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight position={[-5, 3, -2]} intensity={0.5} color="#9A7B56" />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
          <Furniture3DModel rotateSpeed={isRotating ? 1 : 0} />
        </Float>

        <ContactShadows
          position={[0, -0.5, 0]}
          opacity={0.6}
          scale={10}
          blur={2}
          far={4}
        />

        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2.1}
          minDistance={2.5}
          maxDistance={7}
        />
      </Canvas>

      {/* Floating 3D Control overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-[#1C1917]/80 backdrop-blur-md px-4 py-2.5 rounded-full text-white text-xs border border-[#9A7B56]/30">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#9A7B56] animate-pulse" />
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#F5F2EB]/90">
            Interactive 3D Viewport
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="px-3 py-1 bg-[#9A7B56] hover:bg-[#656D4A] rounded-full text-[10px] uppercase tracking-wider font-semibold transition-colors"
          >
            {isRotating ? "Pause Auto-Rotate" : "Auto Rotate"}
          </button>
          <span className="hidden sm:inline text-[10px] text-[#F5F2EB]/60">
            Drag to Rotate • Scroll to Zoom
          </span>
        </div>
      </div>
    </div>
  );
}
