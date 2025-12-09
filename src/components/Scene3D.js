'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function RotatingSphere() {
    const meshRef = useRef();

    useFrame((state) => {
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Sphere ref={meshRef} args={[1, 64, 64]}>
                <MeshDistortMaterial
                    color="#ff1493"
                    attach="material"
                    distort={0.3}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
}

function FloatingGeometry({ position, shape = 'box' }) {
    const meshRef = useRef();

    useFrame((state) => {
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
    });

    const renderGeometry = () => {
        switch (shape) {
            case 'sphere':
                return <sphereGeometry args={[0.2, 16, 16]} />;
            case 'star':
                return <octahedronGeometry args={[0.25, 0]} />;
            default:
                return <boxGeometry args={[0.3, 0.3, 0.3]} />;
        }
    };

    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={meshRef} position={position}>
                {renderGeometry()}
                <meshStandardMaterial color="#ff69b4" wireframe />
            </mesh>
        </Float>
    );
}

export default function Scene3D() {
    return (
        <div className="absolute inset-0 w-full h-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff69b4" />

                <RotatingSphere />

                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
}
