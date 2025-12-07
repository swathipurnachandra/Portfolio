import Navigation from '@/components/Navigation';

export const metadata = {
    title: 'About Me | My Portfolio',
    description: 'Dive deep into my background, skills, and development philosophy',
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
                        <div className="relative bg-linear-to-br from-white to-pink-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-[1.01]">
                            <div className="absolute bottom-0 left-0 w-1 h-32 bg-linear-to-t from-pink-500 to-transparent rounded-bl-2xl"></div>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">Hello!</h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                I am Swathi P, a curious and creatively ambitious student with geek interests. I am currently in my sphomore year. I love building things that gives life to my imaginations.
                                I push myself to grow and learn something new every day.
                            
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                               Every project I worked on has helped me grow and tailor my skills better. I usually work with my team on various projects and hackathons.
                            </p>
                        </div>

                        {/* Background */}
                        <div className="relative bg-linear-to-br from-white to-pink-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-[1.01]">
                            <div className="absolute bottom-0 left-0 w-1 h-32 bg-linear-to-t from-pink-500 to-transparent rounded-bl-2xl"></div>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">My Background</h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                               I initially started my journey as a frontend developer and worked on a couple of hackathon projects. Later, I had a new found interest in backend as well.
                               Now, I work on both frontend and backend based on the team requirements.
                               Currently, I found my niche in 3D Modeling and Extended Reality. 

                               
                               
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Apart from making models, I enjoy reading books, sketching, and studying Data Structures and Algorithms.
                                I try to be consistent in my learning journey.
                            </p>
                        </div>

                        {/* What I Do */}
                        <div className="relative bg-linear-to-br from-white to-pink-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-[1.01]">
                            <div className="absolute bottom-0 left-0 w-1 h-32 bg-linear-to-t from-pink-500 to-transparent rounded-bl-2xl"></div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">What I Do</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-pink-600">Frontend Development</h3>
                                    <p className="text-gray-700">
                                        I create mobile first and responsive web applications using Next.js and TailwindCSS.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-pink-600">Backend Development</h3>
                                    <p className="text-gray-700">
                                        I build robust backend systems using Django and FastAPI, focusing majorily on scalability.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-pink-600">3D Modeling</h3>
                                    <p className="text-gray-700">
                                        I make 3D models and assets using Blender for AR/VR platforms.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Philosophy */}
                        <div className="relative bg-linear-to-br from-white to-pink-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-[1.01]">
                            <div className="absolute bottom-0 left-0 w-1 h-32 bg-linear-to-t from-pink-500 to-transparent rounded-bl-2xl"></div>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">My Philosophy</h2>
                            <ul className="space-y-3 text-gray-700 text-lg">
                                <li className="flex items-start">
                                    <span className="text-pink-500 mr-3">•</span>
                                    <span>I believe consistent learning is the key to everything.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-pink-500 mr-3">•</span>
                                    <span>I majorily focus on providing solutions to real world problems.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-pink-500 mr-3">•</span>
                                    <span>Staying up-to-date with technologies will be always helpful.</span>
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
                    <p>© 2025 Swathi P. Built with Next.js and Tailwind CSS.</p>
                </div>
            </footer>
        </div>
    );
}
