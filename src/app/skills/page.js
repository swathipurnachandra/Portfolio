import Navigation from '@/components/Navigation';
import AnimatedGradient from '@/components/AnimatedGradient';
import { AnimatedSection, StaggeredContainer, AnimatedCard, FloatingBadge } from '@/components/Animations';

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
                { name: "Next.js" },
                { name: "React.js" },
                { name: "JavaScript" },
                { name: "Three.js" }

            ]
        },
        {
            title: "Backend Development",
            color: "purple",
            skills: [
                { name: "Django" },
                { name: "FastAPI" },
                { name: "MySQL" }
            ]
        },
        {
            title: "Tools & Technologies",
            color: "pink",
            skills: [
                { name: "Git & GitHub" },
                { name: "Blender" },
                { name: "VS Code" },
                { name: "Linux" }
            ]
        },
        {
            title: "Design",
            color: "green",
            skills: [
                { name: "UI/UX Fundamentals" },
                { name: "Responsive Design" },
                { name: "Canva" },
            ]
        },
        {
            title: "Soft Skills",
            color: "green",
            skills: [
                { name: "Communication" },
                { name: "Leadership" },
                { name: "Team collaboration" },
                { name: "Public Speaking" },
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
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <Navigation />
            <AnimatedGradient />

            <main className="relative z-10 pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <AnimatedSection>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-pink-500">
                            Skills & Expertise
                        </h1>
                        <p className="text-base text-gray-400 mb-8">
                            These are some of the technical skills and tools that I have experience with.
                        </p>
                    </AnimatedSection>

                    <StaggeredContainer className="grid md:grid-cols-2 gap-6">
                        {skillCategories.map((category, idx) => {
                            const colors = getColorClasses(category.color);
                            return (
                                <AnimatedCard key={idx} className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-white/20">
                                    <div className="absolute bottom-0 left-0 w-1 h-24 bg-linear-to-t from-pink-500 to-transparent rounded-bl-2xl"></div>
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        {category.title}
                                    </h2>
                                    <div className="grid grid-cols-2 gap-2">
                                        {category.skills.map((skill, skillIdx) => (
                                            <FloatingBadge key={skillIdx} delay={skillIdx * 0.1}>
                                                <span className="block px-3 py-1.5 bg-pink-500/20 border border-pink-400/30 rounded-lg text-white font-medium text-sm text-center">
                                                    {skill.name}
                                                </span>
                                            </FloatingBadge>
                                        ))}
                                    </div>
                                </AnimatedCard>
                            );
                        })}
                    </StaggeredContainer>

                    {/* Learning Section */}
                    <AnimatedSection>
                        <div className="mt-12 relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20">
                            <div className="absolute bottom-0 left-0 w-1 h-32 bg-linear-to-t from-pink-500 to-transparent rounded-bl-2xl"></div>
                            <h2 className="text-2xl font-bold mb-6 text-white">I am currently Learning</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    { name: "Data Structures and Algorithms", description: "To ensure the code is efficient, scalable, and solve problems effectively." },
                                    { name: "Three.js", description: "To build immersive Web applications." }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-pink-500/20 backdrop-blur-sm rounded-lg p-4 border border-pink-400/30 flex flex-col h-full">
                                        <h3 className="text-lg font-semibold text-pink-300 mb-2">{item.name}</h3>
                                        <p className="text-gray-200 text-sm text-justify">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Certifications */}
                    <AnimatedSection>
                        <div className="mt-12 relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20">
                            <div className="absolute bottom-0 left-0 w-1 h-32 bg-linear-to-t from-pink-500 to-transparent rounded-bl-2xl"></div>
                            <h2 className="text-2xl font-bold mb-6 text-white">Certifications</h2>
                            <div className="space-y-4">
                                {[
                                    {
                                        title: "Fundamentals of Object-Oriented Programming",
                                        issuer: "NPTEL",
                                        year: "2024",
                                        url: "/OOP.pdf"
                                    },
                                    {
                                        title: "DSA in C by University of Michigan",
                                        issuer: "Coursera",
                                        year: "2025",
                                        url: "/DSA.pdf"
                                    },
                                ].map((cert, idx) => (
                                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-pink-500/20 backdrop-blur-sm rounded-lg p-4 border border-pink-400/30 gap-4">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                                            <p className="text-gray-200 text-sm">{cert.issuer} • {cert.year}</p>
                                        </div>
                                        <a
                                            href={cert.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors text-sm font-medium shrink-0 text-center"
                                        >
                                            View
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Call to Action */}
                    <AnimatedSection>
                        <div className="mt-12 text-center relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20">
                            <div className="absolute bottom-0 left-0 w-1 h-32 bg-linear-to-t from-pink-500 to-transparent rounded-bl-2xl"></div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Interested in working together?</h2>
                            <p className="text-gray-200 text-base mb-6">
                                Let&apos;s connect and communicate more about our common interests.
                            </p>
                            <a
                                href="/contact"
                                className="inline-block px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors font-medium">
                                Get in Touch
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </main>
        </div>
    );
}
