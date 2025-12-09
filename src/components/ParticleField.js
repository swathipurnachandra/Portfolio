'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 100 }) {
    const points = useRef();

    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            const radius = (i % 10) * 0.5;
            const height = Math.floor(i / 10) - 5;

            positions[i * 3] = Math.cos(angle) * radius;
            positions[i * 3 + 1] = height;
            positions[i * 3 + 2] = Math.sin(angle) * radius;
        }

        return positions;
    }, [count]);

    useFrame((state) => {
        points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesPosition.length / 3}
                    array={particlesPosition}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#ff69b4"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}

export default function ParticleField() {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <Particles count={150} />
            </Canvas>
        </div>
    );
}
