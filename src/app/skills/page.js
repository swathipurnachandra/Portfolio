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
                { name: "Next.js", level: 70 },
                { name: "React", level: 50 },
                { name: "JavaScript (ES6+)", level: 70 },
                { name: "HTML5 & CSS3", level: 60 },
                { name: "Tailwind CSS", level: 60 },
                { name: "Responsive Design", level: 90 },

            ]
        },
        {
            title: "Backend Development",
            color: "purple",
            skills: [
                { name: "Django", level: 85 },
                { name: "FastAPI", level: 80 },
                { name: "Restful APIs", level: 50 },
                { name: "CRUD Operations", level: 85 },
                { name: "MySQL", level: 90 },
                { name: "Authentication & Security", level: 80 },
            ]
        },
        {
            title: "Tools & Technologies",
            color: "pink",
            skills: [
                { name: "Git & GitHub", level: 80 },
                { name: "Blender", level: 80 },
                { name: "VS Code", level: 70 },
                { name: "Linux/Unix", level: 85 },
            ]
        },
        {
            title: "Design",
            color: "green",
            skills: [
                { name: "UI/UX Design", level: 75 },
                { name: "Figma", level: 70 },
                { name: "Responsive Design", level: 90 },
                { name: "Canva", level: 90 },
            ]
        },
        {
            title: "Soft Skills",
            color: "green",
            skills: [
                { name: "Communication", level: 95 },
                { name: "Leadership", level: 99 },
                { name: "Team collaboration", level: 90 },
                { name: "Public Speaking", level: 99 },
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

            <main className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-pink-500">
                        Skills & Expertise
                    </h1>
                    <p className="text-xl text-gray-400 mb-12">
                        Technologies and tools I work with to give meaning to my ideas.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {skillCategories.map((category, idx) => {
                            const colors = getColorClasses(category.color);
                            return (
                                <div key={idx} className="relative bg-linear-to-br from-white to-pink-50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-[1.02]">
                                    <div className="absolute bottom-0 left-0 w-1 h-24 bg-linear-to-t from-pink-500 to-transparent rounded-bl-2xl"></div>
                                    <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                        {category.title}
                                    </h2>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, skillIdx) => (
                                            <span key={skillIdx} className="px-3 py-1.5 bg-pink-100 border border-pink-200 rounded-lg text-gray-900 font-medium text-sm">
                                                {skill.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Learning Section */}
                    <div className="mt-12 relative bg-linear-to-br from-white to-pink-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-[1.01]">
                        <div className="absolute bottom-0 left-0 w-1 h-32 bg-linear-to-t from-pink-500 to-transparent rounded-bl-2xl"></div>
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">Currently Learning</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { name: "Data Structures and Algorithms", description: "To code efficiently and give structure to the program" },
                                { name: "Three.js", description: "To build immersive WebXR applications" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-pink-100 rounded-lg p-4 border border-pink-200">
                                    <h3 className="text-xl font-semibold text-pink-600 mb-2">{item.name}</h3>
                                    <p className="text-gray-700 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="mt-12 relative bg-linear-to-br from-white to-pink-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-[1.01]">
                        <div className="absolute bottom-0 left-0 w-1 h-32 bg-linear-to-t from-pink-500 to-transparent rounded-bl-2xl"></div>
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">Certifications & Achievements</h2>
                        <div className="space-y-4">
                            {[
                                {
                                    title: "Fundamentals of Object-Oriented Programming",
                                    issuer: "NPTEL",
                                    year: "2024",
                                    url: "#"
                                },
                                {
                                    title: "DSA in C by University of Michigan",
                                    issuer: "Coursera",
                                    year: "2025",
                                    url: "#"
                                },
                            ].map((cert, idx) => (
                                <div key={idx} className="flex items-start justify-between bg-pink-100 rounded-lg p-4 border border-pink-200">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900">{cert.title}</h3>
                                        <p className="text-gray-700 text-sm">{cert.issuer} • {cert.year}</p>
                                    </div>
                                    <a
                                        href={cert.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-4 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors text-sm font-medium shrink-0"
                                    >
                                        View
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-12 text-center relative bg-linear-to-br from-white to-pink-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-[1.01]">
                        <div className="absolute bottom-0 left-0 w-1 h-32 bg-linear-to-t from-pink-500 to-transparent rounded-bl-2xl"></div>
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">Interested in working together?</h2>
                        <p className="text-gray-700 mb-6">
                            Let&apos;s connect and communicate more about our common interests.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors font-medium">
                            Get In Touch
                        </a>
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
