import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Creatorverse",
        description: "Creatorverse allows users to spotlights their favorite YouTube creators on a global platform for the entire universe to see.",
        image: "/projects/creatorverse.png",
        tags: ["React", "CSS", "Subabase", "CRUD"],
        demoUrl: "https://www.loom.com/share/84f93f0c93984394b460300a4190806b",
        githubUrl: "https://github.com/RyanDong16/web103_prework/tree/main/prework/creatorverse",
    },
    {
        id: 2,
        title: "Legends Plaza",
        description: "For one night only, The Legends Plaza will host a never-forgotten extravaganza of the greatest rock bands of all time! Four different venues, each home to legendary rock performances.",
        image: "/projects/legendsplaza.png",
        tags: ["React", "PostgreSQL", "Express", "Render"],
        demoUrl: "https://www.loom.com/share/4ca334af24774bccb849dc97ef1d778a",
        githubUrl: "https://github.com/RyanDong16/WEB103_project3/tree/main/WEB103_project3",
    },
    {
        id: 3,
        title: "December Nights Brochure",
        description: "Celebrate the magic of the holly jolly Christmas season in San Diego’s stunning Balboa Park.",
        image: "/projects/christmasbrochure.gif",
        tags: ["Canva", "Marketing"],
        demoUrl: "https://drive.google.com/file/d/1cVoj5CTimCx8-zb2YVrGQItaCL3Viqx1/view?usp=sharing",
        githubUrl: "...",
    },
    {
        id: 4,
        title: "Duo Confections",
        description: "Celebrate the magic of the holly jolly Christmas season in San Diego’s stunning Balboa Park!",
        image: "/projects/...",
        tags: ["Adverisement", "Marketing", "Premiere Pro"],
        demoUrl: "https://drive.google.com/file/d/1cVoj5CTimCx8-zb2YVrGQItaCL3Viqx1/view?usp=sharing",
        githubUrl: "...",
    }
];

export const ProjectsSection = () => {

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with 
                    attention to detail, performance, and user experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                        href="https://github.com/RyanDong16"
                        target="_blank"
                    >
                        Check My GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection;