import Navigation from '@/components/Navigation';

export const metadata = {
    title: 'Skills | My Portfolio',
    description: 'My technical skills and expertise in web development',
};

export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend Development",
            color: "blue",
            skills: [
                { name: "React", level: 90 },
                { name: "Next.js", level: 85 },
                { name: "TypeScript", level: 80 },
                { name: "JavaScript (ES6+)", level: 95 },
                { name: "HTML5 & CSS3", level: 95 },
                { name: "Tailwind CSS", level: 90 },
                { name: "Responsive Design", level: 90 },
                { name: "Redux", level: 75 }
            ]
        },
        {
            title: "Backend Development",
            color: "purple",
            skills: [
                { name: "Node.js", level: 85 },
                { name: "Express.js", level: 85 },
                { name: "REST APIs", level: 90 },
                { name: "GraphQL", level: 70 },
                { name: "MongoDB", level: 80 },
                { name: "PostgreSQL", level: 75 },
                { name: "Authentication & Security", level: 80 },
                { name: "Microservices", level: 65 }
            ]
        },
        {
            title: "Tools & Technologies",
            color: "pink",
            skills: [
                { name: "Git & GitHub", level: 90 },
                { name: "Docker", level: 70 },
                { name: "VS Code", level: 95 },
                { name: "Postman", level: 85 },
                { name: "Linux/Unix", level: 75 },
                { name: "CI/CD", level: 70 },
                { name: "Webpack", level: 65 },
                { name: "npm/yarn", level: 90 }
            ]
        },
        {
            title: "Design & Other",
            color: "green",
            skills: [
                { name: "UI/UX Design", level: 75 },
                { name: "Figma", level: 70 },
                { name: "Responsive Design", level: 90 },
                { name: "Agile/Scrum", level: 80 },
                { name: "Problem Solving", level: 90 },
                { name: "Team Collaboration", level: 85 },
                { name: "Technical Writing", level: 75 },
                { name: "Code Review", level: 80 }
            ]
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            blue: {
                text: "text-blue-400",
                bg: "bg-blue-500",
                border: "border-blue-500"
            },
            purple: {
                text: "text-purple-400",
                bg: "bg-purple-500",
                border: "border-purple-500"
            },
            pink: {
                text: "text-pink-400",
                bg: "bg-pink-500",
                border: "border-pink-500"
            },
            green: {
                text: "text-green-400",
                bg: "bg-green-500",
                border: "border-green-500"
            }
        };
        return colors[color];
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <Navigation />

            <main className="pt-24 pb-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-pink-500">
                        Skills & Expertise
                    </h1>
                    <p className="text-xl text-gray-400 mb-12">
                        Technologies and tools I work with to bring ideas to life
                    </p>

                    <div className="space-y-12">
                        {skillCategories.map((category, idx) => {
                            const colors = getColorClasses(category.color);
                            return (
                                <div key={idx} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-pink-500/30">
                                    <h2 className="text-3xl font-bold mb-6 text-pink-500">
                                        {category.title}
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {category.skills.map((skill, skillIdx) => (
                                            <div key={skillIdx}>
                                                <div className="flex justify-between mb-2">
                                                    <span className="text-gray-300 font-medium">{skill.name}</span>
                                                    <span className="text-gray-400">{skill.level}%</span>
                                                </div>
                                                <div className="w-full bg-gray-700 rounded-full h-2.5">
                                                    <div
                                                        className="bg-pink-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                                                        style={{ width: `${skill.level}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Learning Section */}
                    <div className="mt-12 bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-pink-500/30">
                        <h2 className="text-3xl font-bold mb-6 text-pink-500">Currently Learning</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { name: "Rust", description: "Systems programming language" },
                                { name: "AWS", description: "Cloud computing services" },
                                { name: "Three.js", description: "3D graphics for the web" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-black/50 rounded-lg p-4 border border-pink-500/30">
                                    <h3 className="text-xl font-semibold text-pink-400 mb-2">{item.name}</h3>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="mt-12 bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-pink-500/30">
                        <h2 className="text-3xl font-bold mb-6 text-pink-500">Certifications & Achievements</h2>
                        <div className="space-y-4">
                            {[
                                {
                                    title: "Full Stack Web Development Certification",
                                    issuer: "freeCodeCamp",
                                    year: "2024"
                                },
                                {
                                    title: "React Developer Certification",
                                    issuer: "Meta",
                                    year: "2023"
                                },
                                {
                                    title: "Node.js Application Developer",
                                    issuer: "OpenJS Foundation",
                                    year: "2023"
                                }
                            ].map((cert, idx) => (
                                <div key={idx} className="flex items-start justify-between bg-black/50 rounded-lg p-4 border border-pink-500/30">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-200">{cert.title}</h3>
                                        <p className="text-gray-400 text-sm">{cert.issuer}</p>
                                    </div>
                                    <span className="text-pink-400 font-medium">{cert.year}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-12 text-center bg-gray-900/50 rounded-xl p-8 border border-pink-500/30">
                        <h2 className="text-3xl font-bold mb-4 text-pink-500">Interested in working together?</h2>
                        <p className="text-gray-400 mb-6">
                            Let&apos;s discuss how I can help bring your project to life
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-8 py-3 bg-pink-500 hover:bg-pink-600 rounded-lg transition-colors font-medium">
                            Get In Touch
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
