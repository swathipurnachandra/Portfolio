import Link from 'next/link';

export default function Navigation() {
    return (
        <nav className="sticky top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-pink-500/30 shadow-lg shadow-pink-500/10">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <h1 className="relative text-2xl font-bold text-pink-500 cursor-pointer hover:text-pink-400 transition-all group">
                            <span className="relative z-10">Portfolio</span>
                            <span className="absolute inset-0 bg-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded"></span>
                        </h1>
                    </Link>
                    <div className="flex gap-6">
                        <Link href="/" className="relative text-gray-300 hover:text-pink-500 transition-all group">
                            <span className="relative z-10">home</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="/about" className="relative text-gray-300 hover:text-pink-500 transition-all group">
                            <span className="relative z-10">about</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="/projects" className="relative text-gray-300 hover:text-pink-500 transition-all group">
                            <span className="relative z-10">projects</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="/skills" className="relative text-gray-300 hover:text-pink-500 transition-all group">
                            <span className="relative z-10">skills</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
