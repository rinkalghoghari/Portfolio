import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "ModernShop Platform",
      category: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js and Stripe integration",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["React", "Next.js", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Creative Portfolio",
      category: "My Portfolio",
      description: "An interactive portfolio website for a digital artist with 3D animations",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["React.js","Node.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Book Shop Management",
      category: "Ecommerce Marketplace",
      description: "A complete system for managing books, sales, and inventory in a bookstore.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["PHP", "MySql"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "E-commerce":
        return "bg-primary/10 text-primary";
      case "Portfolio":
        return "bg-secondary/20 text-secondary";
      case "SaaS":
        return "bg-primary/10 text-primary";
      default:
        return "bg-accent text-accent-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="card-hover bg-card rounded-xl shadow-sm overflow-hidden"
              data-testid={`project-${index}`}
            >
              <img 
                src={project.image} 
                alt={`${project.title} screenshot`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                  <div className="flex space-x-2">
                    <a 
                      href={project.liveUrl}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`project-live-${index}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`project-github-${index}`}
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-accent text-accent-foreground px-2 py-1 rounded text-sm"
                      data-testid={`project-tech-${tech.toLowerCase()}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            data-testid="button-view-all"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
