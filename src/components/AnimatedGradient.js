'use client';
import { motion } from 'framer-motion';

export default function AnimatedGradient() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Animated gradient orbs */}
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
                style={{
                    background: 'radial-gradient(circle, #ff1493 0%, transparent 70%)',
                }}
                animate={{
                    x: [0, 100, 0],
                    y: [0, -100, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                initial={{ top: '10%', left: '10%' }}
            />
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-15"
                style={{
                    background: 'radial-gradient(circle, #ff69b4 0%, transparent 70%)',
                }}
                animate={{
                    x: [0, -150, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                initial={{ bottom: '20%', right: '15%' }}
            />
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
                style={{
                    background: 'radial-gradient(circle, #c71585 0%, transparent 70%)',
                }}
                animate={{
                    x: [0, 50, 0],
                    y: [0, 150, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                initial={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            />
        </div>
    );
}
