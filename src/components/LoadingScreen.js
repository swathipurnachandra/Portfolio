'use client';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function LoadingCube() {
    const meshRef = useRef();

    useFrame((state) => {
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.7;
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#ff69b4" wireframe />
        </mesh>
    );
}

export default function LoadingScreen({ isLoading }) {
    if (!isLoading) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
        >
            <div className="flex flex-col items-center gap-6">
                {/* 3D Loading Animation */}
                <div className="w-32 h-32">
                    <Canvas camera={{ position: [0, 0, 3] }}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={1} />
                        <LoadingCube />
                    </Canvas>
                </div>

                {/* Loading Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                >
                    <h2 className="text-2xl font-bold text-white mb-2">Loading Experience</h2>
                    <motion.div
                        className="flex gap-2 justify-center"
                    >
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="w-2 h-2 bg-pink-500 rounded-full"
                                animate={{
                                    y: [0, -10, 0],
                                    opacity: [1, 0.5, 1]
                                }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    delay: i * 0.2
                                }}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
