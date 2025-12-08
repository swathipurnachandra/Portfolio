import Navigation from '@/components/Navigation';

export default function Contact() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navigation />

            <main className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Contact Card */}
                    <div className="relative bg-linear-to-br from-white to-pink-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-[1.01]">
                        <div className="absolute bottom-0 left-0 w-1 h-24 sm:h-32 bg-linear-to-t from-pink-500 to-transparent rounded-bl-xl sm:rounded-bl-2xl"></div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900">
                            Contact Me
                        </h1>
                        <p className="text-xl text-gray-800 mb-2">I would love to connect!</p>
                        <p className="text-lg text-gray-700 mb-8">
                            Whether it&apos;s internships, collaborations, or project ideas, always feel free to reach out.
                        </p>

                        {/* Contact Info List */}
                        <div className="space-y-6">
                            {/* Email */}
                            <div>
                                <div className="flex items-center gap-2">
                                    <a
                                        href="mailto:swathitechdev@gmail.com"
                                        className="text-pink-500 hover:text-pink-600 transition-colors"
                                        aria-label="Email"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="mailto:swathitechdev@gmail.com"
                                        className="text-pink-500 hover:underline"
                                    >
                                        swathitechdev@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* LinkedIn */}
                            <div>
                                <div className="flex items-center gap-2">
                                    <a
                                        href="https://linkedin.com/in/swathi-p"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-pink-500 hover:text-pink-600 transition-colors"
                                        aria-label="LinkedIn"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/swathi-p"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-pink-500 hover:underline"
                                    >
                                        linkedin.com/in/swathi-p
                                    </a>
                                </div>
                            </div>

                            {/* GitHub */}
                            <div>
                                <div className="flex items-center gap-2">
                                    <a
                                        href="https://github.com/swathipurnachandra"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-pink-500 hover:text-pink-600 transition-colors"
                                        aria-label="GitHub"
                                    >
                                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://github.com/swathipurnachandra"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-pink-500 hover:underline"
                                    >
                                        github.com/swathipurnachandra
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div>
                                <div>
                                    <span className="text-gray-900 font-medium">Chennai, India</span>
                                </div>
                            </div>

                            {/* Resume Download */}
                            <div>
                                <div>
                                    <a
                                        href="/Swathi_P_Resume.pdf"
                                        download
                                        className="text-pink-500 hover:underline font-medium"
                                    >
                                        Download Resume
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-pink-500/30">
                <div className="max-w-6xl mx-auto text-center text-gray-500">
                    <p>© 2025 Swathi P. Built with Next.js and Tailwind CSS.</p>
                </div>
            </footer>
        </div>
    );
}
