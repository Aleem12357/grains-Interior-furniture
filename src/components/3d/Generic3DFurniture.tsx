"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, ContactShadows, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

export type FurnitureFinish = "cream" | "walnut" | "sage" | "charcoal" | "oak";

export const FINISH_COLORS: Record<FurnitureFinish, { name: string; main: string; accent: string; legs: string; hex: string }> = {
  cream: { name: "Warm Bouclé Cream", main: "#EFECE4", accent: "#9A7B56", legs: "#9A7B56", hex: "#EFECE4" },
  walnut: { name: "Italian Dark Walnut", main: "#6A4B35", accent: "#D4C5B9", legs: "#1C1917", hex: "#6A4B35" },
  sage: { name: "Olive Sage Wool", main: "#656D4A", accent: "#EFECE4", legs: "#9A7B56", hex: "#656D4A" },
  charcoal: { name: "Obsidian Charcoal", main: "#1C1917", accent: "#9A7B56", legs: "#9A7B56", hex: "#1C1917" },
  oak: { name: "European Natural Oak", main: "#D2B48C", accent: "#656D4A", legs: "#6A4B35", hex: "#D2B48C" },
};

interface Furniture3DProps {
  category: "sofa" | "table" | "chair" | "lighting" | "credenza" | "bed" | "armchair" | "interior";
  isRotating?: boolean;
  finish?: FurnitureFinish;
}

function SofaModel({ finish = "cream" }: { finish?: FurnitureFinish }) {
  const colors = FINISH_COLORS[finish] || FINISH_COLORS.cream;

  return (
    <group position={[0, -0.2, 0]}>
      {/* Main Base Cushion */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.8, 0.45, 1.2]} />
        <meshStandardMaterial color={colors.main} roughness={0.7} />
      </mesh>

      {/* Backrest */}
      <mesh position={[0, 0.45, -0.4]} castShadow receiveShadow>
        <boxGeometry args={[2.8, 0.6, 0.4]} />
        <meshStandardMaterial color={colors.main} roughness={0.75} />
      </mesh>

      {/* Armrests */}
      <mesh position={[-1.3, 0.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.3, 0.5, 1.2]} />
        <meshStandardMaterial color={colors.main} roughness={0.75} />
      </mesh>

      <mesh position={[1.3, 0.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.3, 0.5, 1.2]} />
        <meshStandardMaterial color={colors.main} roughness={0.75} />
      </mesh>

      {/* Pillows */}
      <mesh position={[-0.8, 0.4, -0.1]} rotation={[0, 0.2, 0]} castShadow>
        <boxGeometry args={[0.5, 0.5, 0.2]} />
        <meshStandardMaterial color={colors.accent} roughness={0.6} />
      </mesh>

      <mesh position={[0.8, 0.4, -0.1]} rotation={[0, -0.2, 0]} castShadow>
        <boxGeometry args={[0.5, 0.5, 0.2]} />
        <meshStandardMaterial color="#656D4A" roughness={0.6} />
      </mesh>

      {/* Legs */}
      {[[-1.3, -0.3, 0.5], [1.3, -0.3, 0.5], [-1.3, -0.3, -0.5], [1.3, -0.3, -0.5]].map((pos, idx) => (
        <mesh key={idx} position={pos as [number, number, number]} castShadow>
          <cylinderGeometry args={[0.06, 0.04, 0.2, 16]} />
          <meshStandardMaterial color={colors.legs} roughness={0.3} metalness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

function TableModel({ finish = "oak" }: { finish?: FurnitureFinish }) {
  const colors = FINISH_COLORS[finish] || FINISH_COLORS.oak;

  return (
    <group position={[0, -0.3, 0]}>
      <mesh position={[0, 0.6, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.8, 0.1, 1.3]} />
        <meshStandardMaterial color={colors.main} roughness={0.4} />
      </mesh>

      {[[-1.1, 0, 0.45], [1.1, 0, 0.45], [-1.1, 0, -0.45], [1.1, 0, -0.45]].map((pos, idx) => (
        <mesh key={idx} position={pos as [number, number, number]} castShadow>
          <boxGeometry args={[0.15, 1.1, 0.15]} />
          <meshStandardMaterial color={colors.legs} roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
}

function ChairModel({ finish = "charcoal" }: { finish?: FurnitureFinish }) {
  const colors = FINISH_COLORS[finish] || FINISH_COLORS.charcoal;

  return (
    <group position={[0, -0.3, 0]}>
      <mesh position={[0, 0.2, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.0, 0.15, 1.0]} />
        <meshStandardMaterial color={colors.main} roughness={0.7} />
      </mesh>

      <mesh position={[0, 0.7, -0.4]} castShadow receiveShadow>
        <boxGeometry args={[1.0, 0.8, 0.12]} />
        <meshStandardMaterial color={colors.main} roughness={0.7} />
      </mesh>

      {[[-0.45, -0.2, 0.4], [0.45, -0.2, 0.4], [-0.45, -0.2, -0.4], [0.45, -0.2, -0.4]].map((pos, idx) => (
        <mesh key={idx} position={pos as [number, number, number]} castShadow>
          <cylinderGeometry args={[0.04, 0.03, 0.7, 16]} />
          <meshStandardMaterial color={colors.accent} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

function LightingModel({ finish = "walnut" }: { finish?: FurnitureFinish }) {
  const colors = FINISH_COLORS[finish] || FINISH_COLORS.walnut;

  return (
    <group position={[0, 0.2, 0]}>
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 1.2, 16]} />
        <meshStandardMaterial color={colors.accent} metalness={0.8} roughness={0.2} />
      </mesh>

      <mesh position={[0, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 1.8, 16]} />
        <meshStandardMaterial color={colors.accent} metalness={0.9} roughness={0.1} />
      </mesh>

      {[-0.7, 0, 0.7].map((x, idx) => (
        <group key={idx} position={[x, 0.1, 0]}>
          <mesh castShadow>
            <sphereGeometry args={[0.22, 32, 32]} />
            <meshStandardMaterial color="#FFF8F0" roughness={0.1} emissive="#FFF0DD" emissiveIntensity={0.6} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function CredenzaModel({ finish = "walnut" }: { finish?: FurnitureFinish }) {
  const colors = FINISH_COLORS[finish] || FINISH_COLORS.walnut;

  return (
    <group position={[0, -0.2, 0]}>
      <mesh position={[0, 0.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 0.9, 0.8]} />
        <meshStandardMaterial color={colors.main} roughness={0.5} />
      </mesh>

      <mesh position={[0, 0.77, 0]} castShadow>
        <boxGeometry args={[2.55, 0.06, 0.85]} />
        <meshStandardMaterial color="#EFECE4" roughness={0.2} />
      </mesh>

      {[[-1.1, -0.25, 0.3], [1.1, -0.25, 0.3], [-1.1, -0.25, -0.3], [1.1, -0.25, -0.3]].map((pos, idx) => (
        <mesh key={idx} position={pos as [number, number, number]} castShadow>
          <cylinderGeometry args={[0.03, 0.02, 0.2, 16]} />
          <meshStandardMaterial color={colors.legs} metalness={0.8} />
        </mesh>
      ))}
    </group>
  );
}

function BedModel({ finish = "cream" }: { finish?: FurnitureFinish }) {
  const colors = FINISH_COLORS[finish] || FINISH_COLORS.cream;

  return (
    <group position={[0, -0.3, 0]}>
      <mesh position={[0, 0.2, 0.2]} castShadow receiveShadow>
        <boxGeometry args={[2.2, 0.35, 2.0]} />
        <meshStandardMaterial color={colors.main} roughness={0.9} />
      </mesh>

      <mesh position={[0, 0.6, -0.85]} castShadow receiveShadow>
        <boxGeometry args={[2.4, 0.9, 0.15]} />
        <meshStandardMaterial color={colors.accent} roughness={0.4} />
      </mesh>

      {[-0.6, 0.6].map((x, idx) => (
        <mesh key={idx} position={[x, 0.42, -0.6]} castShadow>
          <boxGeometry args={[0.7, 0.15, 0.4]} />
          <meshStandardMaterial color="#656D4A" roughness={0.7} />
        </mesh>
      ))}
    </group>
  );
}

function InteriorModel({ finish = "sage" }: { finish?: FurnitureFinish }) {
  const colors = FINISH_COLORS[finish] || FINISH_COLORS.sage;

  return (
    <group position={[0, -0.2, 0]}>
      <mesh position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[3.2, 0.05, 3.2]} />
        <meshStandardMaterial color="#EFECE4" roughness={0.6} />
      </mesh>
      <mesh position={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[2.0, 0.4, 0.9]} />
        <meshStandardMaterial color={colors.main} roughness={0.8} />
      </mesh>
      <mesh position={[0, 0.8, 0]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color={colors.accent} emissive={colors.accent} emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function ModelSelector({ category, finish }: { category: string; finish?: FurnitureFinish }) {
  switch (category) {
    case "table":
      return <TableModel finish={finish} />;
    case "chair":
      return <ChairModel finish={finish} />;
    case "lighting":
      return <LightingModel finish={finish} />;
    case "credenza":
      return <CredenzaModel finish={finish} />;
    case "bed":
      return <BedModel finish={finish} />;
    case "armchair":
      return <ChairModel finish={finish} />;
    case "interior":
      return <InteriorModel finish={finish} />;
    case "sofa":
    default:
      return <SofaModel finish={finish} />;
  }
}

function RotatingGroup({ category, isRotating, finish }: { category: string; isRotating: boolean; finish?: FurnitureFinish }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current && isRotating) {
      groupRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <group ref={groupRef}>
      <ModelSelector category={category} finish={finish} />
    </group>
  );
}

export default function Generic3DFurniture({
  category,
  isRotating = true,
  finish = "cream",
}: Furniture3DProps) {
  return (
    <Canvas shadows className="w-full h-full cursor-grab active:cursor-grabbing">
      <PerspectiveCamera makeDefault position={[3, 2, 4]} fov={45} />
      <ambientLight intensity={1.3} />
      <directionalLight position={[5, 8, 5]} intensity={1.8} castShadow shadow-mapSize={1024} />
      <pointLight position={[-5, 3, -2]} intensity={0.6} color="#9A7B56" />

      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
        <RotatingGroup category={category} isRotating={isRotating} finish={finish} />
      </Float>

      <ContactShadows position={[0, -0.6, 0]} opacity={0.6} scale={10} blur={2} far={4} />
      <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2.05} minDistance={2} maxDistance={8} />
    </Canvas>
  );
}
