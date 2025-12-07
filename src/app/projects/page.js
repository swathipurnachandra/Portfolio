import Navigation from '@/components/Navigation';

export const metadata = {
    title: 'Projects | My Portfolio',
    description: 'Explore my web development projects and technical work',
};

export default function Projects() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-featured e-commerce platform with payment integration, user authentication, shopping cart, and admin dashboard. Built with modern technologies for scalability and performance.",
            tech: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Tailwind CSS"],
            features: ["Payment Integration", "Admin Dashboard", "Real-time Inventory", "User Reviews"],
            github: "https://github.com/yourusername/project1",
            demo: "https://project1.demo.com"
        },
        {
            title: "Real-Time Chat Application",
            description: "A modern chat application with real-time messaging, group chats, file sharing, and emoji support. Features WebSocket connections for instant communication.",
            tech: ["React", "Socket.io", "Node.js", "Express", "PostgreSQL"],
            features: ["Real-time Messaging", "Group Chats", "File Sharing", "Typing Indicators"],
            github: "https://github.com/yourusername/project2",
            demo: "https://project2.demo.com"
        },
        {
            title: "Task Management System",
            description: "A collaborative task management tool with project boards, team collaboration features, and progress tracking. Perfect for agile teams and project management.",
            tech: ["React", "Node.js", "MongoDB", "Redux", "Material-UI"],
            features: ["Drag & Drop", "Team Collaboration", "Progress Tracking", "Notifications"],
            github: "https://github.com/yourusername/project3",
            demo: "https://project3.demo.com"
        },
        {
            title: "Portfolio Website Builder",
            description: "A drag-and-drop website builder that allows users to create beautiful portfolio websites without coding. Includes templates, customization options, and hosting.",
            tech: ["Next.js", "React", "TailwindCSS", "Supabase", "Vercel"],
            features: ["Drag & Drop Builder", "Multiple Templates", "Custom Domains", "Analytics"],
            github: "https://github.com/yourusername/project4",
            demo: "https://project4.demo.com"
        },
        {
            title: "Weather Dashboard",
            description: "A comprehensive weather application with current conditions, forecasts, interactive maps, and location-based weather alerts. Beautiful UI with data visualization.",
            tech: ["React", "OpenWeather API", "Chart.js", "Styled Components"],
            features: ["Real-time Weather", "7-Day Forecast", "Interactive Maps", "Weather Alerts"],
            github: "https://github.com/yourusername/project5",
            demo: "https://project5.demo.com"
        },
        {
            title: "Social Media Dashboard",
            description: "An analytics dashboard for social media management with metrics tracking, post scheduling, and engagement analytics across multiple platforms.",
            tech: ["Vue.js", "Node.js", "MongoDB", "D3.js", "Express"],
            features: ["Multi-platform Support", "Analytics", "Post Scheduling", "Engagement Metrics"],
            github: "https://github.com/yourusername/project6",
            demo: "https://project6.demo.com"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            <Navigation />

            <main className="pt-24 pb-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-pink-500">
                        My Projects
                    </h1>
                    <p className="text-xl text-gray-400 mb-12">
                        Here are some of my recent projects showcasing my skills and expertise
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group relative bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                            >
                                {/* Red accent border on bottom-left */}
                                <div className="absolute bottom-0 left-0 w-1 h-32 bg-gradient-to-t from-pink-500 to-transparent rounded-bl-2xl"></div>

                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</p>

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
                                    <div className="mt-6">
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
                    <div className="mt-16 text-center bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-pink-500/30">
                        <h2 className="text-3xl font-bold mb-4 text-pink-500">Want to see more?</h2>
                        <p className="text-gray-400 mb-6">
                            Check out my GitHub profile for more projects and contributions
                        </p>
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-3 bg-pink-500 hover:bg-pink-600 rounded-lg transition-colors font-medium">
                            Visit My GitHub
                        </a>
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
