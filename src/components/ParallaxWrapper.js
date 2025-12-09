'use client';
import { useRef, useEffect } from 'react';

export default function ParallaxWrapper({ children, speed = 0.5 }) {
    const parallaxRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                const scrolled = window.scrollY;
                parallaxRef.current.style.transform = `translateY(${scrolled * speed}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return (
        <div ref={parallaxRef} className="transition-transform duration-100">
            {children}
        </div>
    );
}
