import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section - Split Layout */}
      <section className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              {/* Decorative line */}
              <div className="w-12 sm:w-16 h-1 bg-pink-500"></div>

              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 leading-tight">
                  <span className="text-gray-200">I am</span>
                  <span className="text-white"> Swathi P,</span>
                </h1>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="text-gray-400">a</span>
                  <span className="text-pink-500"> Developer & XR Enthusiast</span>
                </h2>
              </div>

              <p className="text-gray-400 text-base sm:text-lg max-w-lg leading-relaxed text-justify">
                I build fast, modern, and immersive digital experiences using scalable frameworks. I love contributing to meaningful projects that provide solutions to real world problems. Let us build something meaningful together!
              </p>

              <div className="flex gap-4 sm:gap-6 flex-wrap">
                <Link href="/projects" className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-pink-500 hover:bg-pink-600 rounded-full transition-all font-medium overflow-hidden inline-block text-center whitespace-nowrap min-w-[140px]">
                  <span className="relative z-10">View Projects</span>
                  <div className="absolute inset-0 bg-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                <Link href="/about" className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-transparent hover:bg-pink-500/10 rounded-full transition-all font-medium border-2 border-pink-500/30 hover:border-pink-500/50 inline-block text-center whitespace-nowrap min-w-[140px]">
                  <span className="text-pink-500">Browse Portfolio</span>
                </Link>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Decorative circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full aspect-square rounded-full border-4 border-pink-500/30"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[85%] aspect-square rounded-full bg-pink-500/10 blur-2xl"></div>
                </div>

                {/* Profile Image */}
                <div className="relative z-10 w-full aspect-square rounded-full border-4 border-pink-500/20 overflow-hidden">
                  <Image
                    src="/swath.jpg"
                    alt="Swathi P"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute top-1/4 -left-4 w-3 h-3 bg-pink-500 rounded-full"></div>
                <div className="absolute bottom-1/4 -right-4 w-2 h-2 bg-pink-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-pink-500/30">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© 2025 Swathi P. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
