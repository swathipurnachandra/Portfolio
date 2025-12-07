import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse -top-48 -left-48"></div>
        <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse -bottom-48 -right-48 animation-delay-2000"></div>
      </div>

      <Navigation />

      {/* Hero Section - Split Layout */}
      <section className="min-h-screen flex items-center relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              {/* Decorative line */}
              <div className="w-16 h-1 bg-pink-500" style={{ boxShadow: '0 0 20px rgba(255, 0, 110, 0.6)' }}></div>

              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                  <span className="text-gray-200">im </span>
                  <span className="text-white">john moore,</span>
                </h1>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                  <span className="text-gray-400">a </span>
                  <span className="text-pink-500 animate-glow" style={{ textShadow: '0 0 30px rgba(255, 0, 110, 0.6)' }}>digital designer</span>
                </h2>
              </div>

              <p className="text-gray-400 text-lg max-w-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi.
              </p>

              <div className="flex gap-4 flex-wrap animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Link href="/contact" className="group relative px-8 py-4 bg-pink-500 hover:bg-pink-600 rounded-full transition-all font-medium overflow-hidden" style={{ boxShadow: '0 0 30px rgba(255, 0, 110, 0.4)' }}>
                  <span className="relative z-10">contact me</span>
                  <div className="absolute inset-0 bg-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                <Link href="/about" className="group relative px-8 py-4 bg-transparent hover:bg-pink-500/10 rounded-full transition-all font-medium border-2 border-transparent hover:border-pink-500/30">
                  <span className="text-pink-500">browse portfolio</span>
                </Link>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Decorative circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full aspect-square rounded-full border-4 border-pink-500/30" style={{ boxShadow: '0 0 60px rgba(255, 0, 110, 0.3)' }}></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center animate-pulse">
                  <div className="w-[85%] aspect-square rounded-full bg-pink-500/10 blur-2xl"></div>
                </div>

                {/* Profile placeholder */}
                <div className="relative z-10 w-full aspect-square rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-pink-500/20 overflow-hidden flex items-center justify-center" style={{ boxShadow: '0 0 40px rgba(255, 0, 110, 0.2)' }}>
                  <div className="w-32 h-32 bg-pink-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-20 h-20 text-pink-500/40" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute top-1/4 -left-4 w-3 h-3 bg-pink-500 rounded-full animate-float" style={{ boxShadow: '0 0 20px rgba(255, 0, 110, 0.8)' }}></div>
                <div className="absolute bottom-1/4 -right-4 w-2 h-2 bg-pink-400 rounded-full animate-float animation-delay-2000" style={{ boxShadow: '0 0 15px rgba(255, 0, 110, 0.8)' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-pink-500/30">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© 2025 Your Name. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
