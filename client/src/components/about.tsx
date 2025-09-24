import { Code, Palette, Smartphone } from "lucide-react";

export default function About() {
  const skills = [
    { name: "Clean Code", progress: 95, icon: Code },
    { name: "UI/UX Design", progress: 70, icon: Palette },
    { name: "Responsive Design", progress: 70, icon: Smartphone },
  ];

  const techCategories = [
    { title: "Frontend", tech: "React, Next.js, TypeScript" },
    { title: "Design", tech: "Figma" },
    { title: "Backend", tech: "Node.js, PostgreSQL" },
    { title: "Tools", tech: "Git, Docker, AWS" },
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With over 5 years of experience in web development and design, I've had the privilege 
              of working with startups, agencies, and enterprise clients to bring their digital visions to life.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I specialize in React, Next.js, and modern web technologies, always staying at the 
              forefront of industry trends to deliver cutting-edge solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {techCategories.map((category, index) => (
                <div 
                  key={index}
                  className="bg-accent p-4 rounded-lg"
                  data-testid={`tech-${category.title.toLowerCase()}`}
                >
                  <h4 className="font-semibold mb-2">{category.title}</h4>
                  <p className="text-sm text-muted-foreground">{category.tech}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-sm"
                  data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="text-primary-foreground" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {skill.name === "Clean Code" && "Writing maintainable, scalable code"}
                        {skill.name === "UI/UX Design" && "Creating intuitive user experiences"}
                        {skill.name === "Responsive Design" && "Mobile-first approach"}
                      </p>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.progress}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
