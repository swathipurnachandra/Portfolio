import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Scene3D from '@/components/Scene3D';
import ParticleField from '@/components/ParticleField';
import ParallaxWrapper from '@/components/ParallaxWrapper';
import AnimatedGradient from '@/components/AnimatedGradient';
import { AnimatedSection } from '@/components/Animations';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navigation />

      {/* Animated Gradient Background */}
      <AnimatedGradient />

      {/* 3D Background */}
      <div className="fixed inset-0 z-0 opacity-30">
        <Scene3D />
      </div>

      {/* Hero Section - Split Layout */}
      <section className="relative z-10 min-h-screen flex items-center py-20">
        <ParallaxWrapper speed={0.3}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 sm:space-y-8 relative">
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
                  <a href="/Swathi_P_Resume.pdf" download className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-transparent hover:bg-pink-500/10 rounded-full transition-all font-medium border-2 border-pink-500/30 hover:border-pink-500/50 inline-block text-center whitespace-nowrap min-w-[140px]">
                    <span className="text-pink-500">Download Resume</span>
                  </a>
                </div>
              </div>

              {/* Right Content - Profile Image */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
                  {/* Decorative circles */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full aspect-square rounded-full border-4 border-pink-500/30"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[85%] aspect-square rounded-full bg-pink-500/10 blur-2xl"></div>
                  </div>

                  {/* Profile Image */}
                  <div className="relative z-10 w-full aspect-square rounded-full overflow-hidden border-4 border-pink-500">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/swathip.jpeg"
                        alt="Swathi P"
                        fill
                        sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 448px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-1/4 -left-4 w-3 h-3 bg-pink-500 rounded-full"></div>
                  <div className="absolute bottom-1/4 -right-4 w-2 h-2 bg-pink-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </ParallaxWrapper>
      </section>
    </div>
  );
}
