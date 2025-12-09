import Navigation from '@/components/Navigation';
import AnimatedGradient from '@/components/AnimatedGradient';
import { AnimatedSection, StaggeredContainer, AnimatedCard } from '@/components/Animations';

export const metadata = {
    title: 'About Me | My Portfolio',
    description: 'Dive deep into my background, skills, and development philosophy',
};

export default function About() {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <Navigation />
            <AnimatedGradient />

            <main className="relative z-10 pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    <AnimatedSection>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-pink-500">
                            About Me
                        </h1>
                    </AnimatedSection>

                    <StaggeredContainer className="space-y-8">
                        {/* Introduction */}
                        <AnimatedCard className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20">
                            <div className="absolute bottom-0 left-0 w-1 h-32 bg-linear-to-t from-pink-500 to-transparent rounded-bl-2xl"></div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Hey there!</h2>
                            <p className="text-gray-200 text-base leading-relaxed mb-4 text-justify">
                                I am Swathi P, a sophomore student pursuing CSE(Cyber Security) passionate about building intuitive web applications and exploring immersive technologies like VR, AR, and 3D Models.
                            </p>
                            <p className="text-gray-200 text-base leading-relaxed text-justify">
                                I am also actively learning Three.js, Blender, and strengthening my skills in Data Structures and Algorithms. I am constantly seeking opportunities to grow and contribute to innovative projects.
                            </p>
                        </AnimatedCard>

                        {/* Background */}
                        <AnimatedCard className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20">
                            <div className="absolute bottom-0 left-0 w-1 h-32 bg-linear-to-t from-pink-500 to-transparent rounded-bl-2xl"></div>
                            <h2 className="text-2xl font-bold mb-4 text-white">My Background</h2>
                            <p className="text-gray-200 text-base leading-relaxed mb-4 text-justify">
                                I initially started my journey as a frontend developer and worked on a couple of hackathon projects. Later, I had a new found interest in backend as well. Now, I work on both frontend and backend based on the team requirements. Currently, I found my niche in 3D Modeling and Extended Reality.
                            </p>
                            <p className="text-gray-200 text-base leading-relaxed text-justify">
                                When I am not coding, I read books, learn new tools, and explore recent trends in technology.
                            </p>
                        </AnimatedCard>

                        {/* What I Do */}
                        <AnimatedCard className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20">
                            <div className="absolute bottom-0 left-0 w-1 h-32 bg-linear-to-t from-pink-500 to-transparent rounded-bl-2xl"></div>
                            <h2 className="text-2xl font-bold mb-6 text-white">What I Do?</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <h3 className="text-lg font-semibold text-pink-400">Frontend Development</h3>
                                    <p className="text-gray-200 text-base text-justify">
                                        I create mobile first and responsive web applications using Next.js and TailwindCSS.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-semibold text-pink-400">Backend Development</h3>
                                    <p className="text-gray-200 text-base text-justify">
                                        I build robust backend systems using Django and FastAPI, focusing majorily on scalability.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-semibold text-pink-400">3D Modeling</h3>
                                    <p className="text-gray-200 text-base text-justify">
                                        I make 3D models and assets using Blender for AR/VR platforms.
                                    </p>
                                </div>
                            </div>
                        </AnimatedCard>
                    </StaggeredContainer>
                </div>
            </main>
        </div>
    );
}
