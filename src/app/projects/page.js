import Navigation from '@/components/Navigation';

export const metadata = {
    title: 'Projects | My Portfolio',
    description: 'Dive deep into my technology interests.',
};

export default function Projects() {
    const projects = [
        {
            title: "AI Network Support Agent",
            description: "This agent is designed to empower users by providing immediate, reliable, and AI-powered assistance for common PC and network issues. This system minimizes reliance on technical personnel by enabling users to diagnose and resolve problems independently through conversational guidance.",
            tech: ["JavaScript", "Python + Streamlit", "Groq API", "FastAPI"],
            features: ["Query Handling via AI", "Intent Recognition", "Context-Aware Follow-Up"],
            github: "https://github.com/swathipurnachandra/emailbot",

        },
        {
            title: "3D Blackhole Simulation",
            description: "Designed a 3D black hole simulation in Blender, showcasing gravitational lensing and accretion disk dyanmics. Implemented realistic textures and lighting to enhance visual fidelity, creating an immersive experience that illustrates complex astrophysical phenomena.",
            tech: ["Blender",],
            features: ["Interactive 3D Model", "Fast Rendering", "Smooth Animations"],
            github: ""
        },
        {
            title: "WebXR Car Simulation",
            description: "A simple 3D car simulation using A-Frame, JavaScript, and HTML. The project demonstrates basic WebXR capabilities, allowing users to interact with a 3D car model in a virtual environment.",
            tech: ["A-Frame", "JavaScript", "HTML"],
            features: ["Interactive 3D Model", "WASD Control", "Responsive UI"],
            github: "https://github.com/swathipurnachandra/car-animation"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            <Navigation />

            <main className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-pink-500">
                        My Projects
                    </h1>
                    <p className="text-base text-gray-400 mb-12">
                        These are some projects that I worked on recently.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group relative bg-linear-to-br from-white to-pink-50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-[1.02] flex flex-col"
                            >
                                {/* Red accent border on bottom-left */}
                                <div className="absolute bottom-0 left-0 w-1 h-32 bg-linear-to-t from-pink-500 to-transparent rounded-bl-2xl"></div>

                                <div className="relative z-10 flex flex-col flex-1">
                                    <h3 className="text-lg font-bold mb-3 text-gray-900">{project.title}</h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed text-sm text-justify">{project.description}</p>

                                    {/* Technologies */}
                                    <div className="mb-4">
                                        <h4 className="text-xs font-semibold text-gray-700 mb-2">Technologies:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, i) => (
                                                <span key={i} className="px-2 py-1 bg-pink-100 border border-pink-200 rounded-md text-xs text-pink-700">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="mb-4">
                                        <h4 className="text-xs font-semibold text-gray-700 mb-2">Key Features:</h4>
                                        <ul className="space-y-1">
                                            {project.features.map((feature, i) => (
                                                <li key={i} className="text-xs text-gray-600 flex items-center">
                                                    <span className="text-pink-500 mr-2">✓</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Links */}
                                    <div className="mt-auto pt-6">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors text-center font-medium text-sm"
                                        >
                                            View Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="mt-16 text-center relative bg-linear-to-br from-white to-pink-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-[1.01]">
                        <div className="absolute bottom-0 left-0 w-1 h-32 bg-linear-to-t from-pink-500 to-transparent rounded-bl-2xl"></div>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">Want to see more?</h2>
                        <p className="text-gray-700 text-base mb-6">
                            Check out my GitHub profile to know more about my projects and contributions.
                        </p>
                        <a
                            href="https://github.com/swathipurnachandra"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors font-medium">
                            Visit My GitHub
                        </a>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-pink-500/30">
                <div className="max-w-6xl mx-auto text-center text-gray-500">
                    <p>© 2025 Swathi P. All rights reserved</p>
                </div>
            </footer>
        </div>
    );
}
