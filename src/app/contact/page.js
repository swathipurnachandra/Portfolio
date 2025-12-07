import Navigation from '@/components/Navigation';

export default function Contact() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navigation />

            <main className="pt-32 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header Section */}
                    <div className="mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Contact Me
                        </h1>
                        <p className="text-xl text-gray-300 mb-2">I would love to connect!</p>
                        <p className="text-lg text-gray-400">
                            Whether it&apos;s internships, collaborations, or project ideas — feel free to reach out.
                        </p>
                    </div>

                    {/* Contact Info List */}
                    <div className="space-y-6 mb-12">
                        {/* Email */}
                        <div className="flex items-center gap-4 group">
                            <span className="text-2xl">📧</span>
                            <div>
                                <span className="text-white font-medium">Email:</span>{' '}
                                <a
                                    href="mailto:swathi@example.com"
                                    className="text-pink-500 hover:underline"
                                >
                                    swathi@example.com
                                </a>
                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="flex items-center gap-4 group">
                            <span className="text-2xl">🔗</span>
                            <div>
                                <span className="text-white font-medium">LinkedIn:</span>{' '}
                                <a
                                    href="https://linkedin.com/in/yourname"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-pink-500 hover:underline"
                                >
                                    linkedin.com/in/yourname
                                </a>
                            </div>
                        </div>

                        {/* GitHub */}
                        <div className="flex items-center gap-4 group">
                            <span className="text-2xl">🐙</span>
                            <div>
                                <span className="text-white font-medium">GitHub:</span>{' '}
                                <a
                                    href="https://github.com/swathi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-pink-500 hover:underline"
                                >
                                    github.com/swathi
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-4 group">
                            <span className="text-2xl">📍</span>
                            <div>
                                <span className="text-white font-medium">Chennai, India</span>
                            </div>
                        </div>

                        {/* Resume Download */}
                        <div className="flex items-center gap-4 group">
                            <span className="text-2xl">📄</span>
                            <div>
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="text-pink-500 hover:underline font-medium"
                                >
                                    [Download Resume]
                                </a>
                            </div>
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
