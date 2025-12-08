'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-pink-500/30 shadow-lg shadow-pink-500/10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <h1 className="relative text-lg sm:text-xl md:text-2xl font-bold text-pink-500 cursor-pointer hover:text-pink-400 transition-all group">
                            <span className="relative z-10">Portfolio</span>
                            <span className="absolute inset-0 bg-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded"></span>
                        </h1>
                    </Link>
                    <div className="flex gap-3 sm:gap-4 md:gap-6">
                        <Link href="/" className={`relative transition-all group text-sm sm:text-base ${pathname === '/' ? 'text-pink-500' : 'text-gray-300 hover:text-pink-500'}`}>
                            <span className="relative z-10">Home</span>
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-pink-500 transition-all duration-300 ${pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </Link>
                        <Link href="/about" className={`relative transition-all group text-sm sm:text-base ${pathname === '/about' ? 'text-pink-500' : 'text-gray-300 hover:text-pink-500'}`}>
                            <span className="relative z-10">About</span>
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-pink-500 transition-all duration-300 ${pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </Link>
                        <Link href="/projects" className={`relative transition-all group text-sm sm:text-base ${pathname === '/projects' ? 'text-pink-500' : 'text-gray-300 hover:text-pink-500'}`}>
                            <span className="relative z-10">Projects</span>
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-pink-500 transition-all duration-300 ${pathname === '/projects' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </Link>
                        <Link href="/skills" className={`relative transition-all group text-sm sm:text-base ${pathname === '/skills' ? 'text-pink-500' : 'text-gray-300 hover:text-pink-500'}`}>
                            <span className="relative z-10">Skills</span>
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-pink-500 transition-all duration-300 ${pathname === '/skills' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
