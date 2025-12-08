import Navigation from '@/components/Navigation';

export const metadata = {
    title: 'About Me | My Portfolio',
    description: 'Dive deep into my background, skills, and development philosophy',
};

export default function About() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navigation />

            <main className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-pink-500">
                        About Me
                    </h1>

                    <div className="space-y-8">
                        {/* Introduction */}
                        <div className="relative bg-linear-to-br from-white to-pink-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-[1.01]">
                            <div className="absolute bottom-0 left-0 w-1 h-32 bg-linear-to-t from-pink-500 to-transparent rounded-bl-2xl"></div>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">Hey there!</h2>
                            <p className="text-gray-700 text-base leading-relaxed mb-4 text-justify">
                                I am Swathi P, a sophomore student pursuing CSE(Cyber Security) passionate about building intuitive web applications and exploring immersive technologies like VR, AR, and 3D Models.
                            </p>
                            <p className="text-gray-700 text-base leading-relaxed text-justify">
                                I am also actively learning Three.js, Blender, and strengthening my skills in Data Structures and Algorithms. I am constantly seeking opportunities to grow and contribute to innovative projects.
                            </p>
                        </div>

                        {/* Background */}
                        <div className="relative bg-linear-to-br from-white to-pink-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-[1.01]">
                            <div className="absolute bottom-0 left-0 w-1 h-32 bg-linear-to-t from-pink-500 to-transparent rounded-bl-2xl"></div>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">My Background</h2>
                            <p className="text-gray-700 text-base leading-relaxed mb-4 text-justify">
                                I initially started my journey as a frontend developer and worked on a couple of hackathon projects. Later, I had a new found interest in backend as well. Now, I work on both frontend and backend based on the team requirements. Currently, I found my niche in 3D Modeling and Extended Reality.
                            </p>
                            <p className="text-gray-700 text-base leading-relaxed text-justify">
                                When I am not coding, I read books, learn new tools, and explore recent trends in technology.
                            </p>
                        </div>

                        {/* What I Do */}
                        <div className="relative bg-linear-to-br from-white to-pink-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-[1.01]">
                            <div className="absolute bottom-0 left-0 w-1 h-32 bg-linear-to-t from-pink-500 to-transparent rounded-bl-2xl"></div>
                            <h2 className="text-2xl font-bold mb-6 text-gray-900">What I Do?</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <h3 className="text-lg font-semibold text-pink-600">Frontend Development</h3>
                                    <p className="text-gray-700 text-base text-justify">
                                        I create mobile first and responsive web applications using Next.js and TailwindCSS.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-semibold text-pink-600">Backend Development</h3>
                                    <p className="text-gray-700 text-base text-justify">
                                        I build robust backend systems using Django and FastAPI, focusing majorily on scalability.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-semibold text-pink-600">3D Modeling</h3>
                                    <p className="text-gray-700 text-base text-justify">
                                        I make 3D models and assets using Blender for AR/VR platforms.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-pink-500/30">
                <div className="max-w-6xl mx-auto text-center text-gray-500">
                    <p>© 2025 Swathi P. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
