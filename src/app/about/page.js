import Navigation from '@/components/Navigation';

export const metadata = {
    title: 'About Me | My Portfolio',
    description: 'Learn more about my background, experience, and passion for web development',
};

export default function About() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navigation />

            <main className="pt-24 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-8 text-pink-500">
                        About Me
                    </h1>

                    <div className="space-y-8">
                        {/* Introduction */}
                        <div className="relative bg-linear-to-br from-white to-pink-50 rounded-2xl p-8 shadow-lg overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-1 h-32 bg-linear-to-t from-pink-500 to-transparent rounded-bl-2xl"></div>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">Hello! 👋</h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                I&apos;m a passionate developer with expertise in creating modern web applications.
                                I love turning ideas into reality through clean code and elegant design.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                With experience in both frontend and backend development, I specialize in building
                                responsive, user-friendly applications that solve real-world problems.
                            </p>
                        </div>

                        {/* Background */}
                        <div className="relative bg-linear-to-br from-white to-pink-50 rounded-2xl p-8 shadow-lg overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-1 h-32 bg-linear-to-t from-pink-500 to-transparent rounded-bl-2xl"></div>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">My Background</h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                My journey in web development started [X years ago], and since then, I&apos;ve been
                                continuously learning and growing in this ever-evolving field.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                I have worked on various projects ranging from small business websites to large-scale
                                web applications, always focusing on delivering quality and user satisfaction.
                            </p>
                        </div>

                        {/* What I Do */}
                        <div className="relative bg-linear-to-br from-white to-pink-50 rounded-2xl p-8 shadow-lg overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-1 h-32 bg-linear-to-t from-pink-500 to-transparent rounded-bl-2xl"></div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">What I Do</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-pink-600">Frontend Development</h3>
                                    <p className="text-gray-700">
                                        Creating responsive, intuitive user interfaces with modern frameworks and libraries.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-pink-600">Backend Development</h3>
                                    <p className="text-gray-700">
                                        Building robust server-side applications, APIs, and database architectures.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-pink-600">UI/UX Design</h3>
                                    <p className="text-gray-700">
                                        Designing beautiful, user-centered interfaces that enhance user experience.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-pink-600">Problem Solving</h3>
                                    <p className="text-gray-700">
                                        Analyzing complex problems and implementing efficient, scalable solutions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Philosophy */}
                        <div className="relative bg-linear-to-br from-white to-pink-50 rounded-2xl p-8 shadow-lg overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-1 h-32 bg-linear-to-t from-pink-500 to-transparent rounded-bl-2xl"></div>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">My Philosophy</h2>
                            <ul className="space-y-3 text-gray-700 text-lg">
                                <li className="flex items-start">
                                    <span className="text-pink-500 mr-3">•</span>
                                    <span>Write clean, maintainable code that others can understand</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-pink-500 mr-3">•</span>
                                    <span>Always put the user experience first</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-pink-500 mr-3">•</span>
                                    <span>Keep learning and stay updated with the latest technologies</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-pink-500 mr-3">•</span>
                                    <span>Collaborate effectively and communicate clearly with team members</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-pink-500/30">
                <div className="max-w-6xl mx-auto text-center text-gray-500">
                    <p>© 2025 Your Name. Built with Next.js and Tailwind CSS.</p>
                </div>
            </footer>
        </div>
    );
}
