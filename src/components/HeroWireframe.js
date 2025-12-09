'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function WireframeShape() {
    const meshRef = useRef();

    useFrame((state) => {
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
        meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.2;
    });

    return (
        <mesh ref={meshRef}>
            <torusKnotGeometry args={[1, 0.3, 128, 16]} />
            <meshStandardMaterial
                color="#ff69b4"
                wireframe
                transparent
                opacity={0.6}
            />
        </mesh>
    );
}

export default function HeroWireframe() {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <WireframeShape />
            </Canvas>
        </div>
    );
}
