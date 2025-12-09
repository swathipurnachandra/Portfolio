'use client';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export { fadeInUp, staggerContainer, scaleIn };

export function AnimatedSection({ children, className = "" }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggeredContainer({ children, className = "" }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function AnimatedCard({ children, className = "" }) {
    const handleMouseMove = (event, info) => {
        const card = event.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };

    const handleMouseLeave = (event) => {
        event.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    };

    return (
        <motion.div
            variants={fadeInUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.1s ease-out"
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function FloatingBadge({ children, delay = 0 }) {
    return (
        <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: 1,
                y: [0, -5, 0],
            }}
            transition={{
                opacity: { duration: 0.3, delay },
                y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay
                }
            }}
        >
            {children}
        </motion.span>
    );
}
