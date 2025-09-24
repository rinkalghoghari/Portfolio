import { Github, Linkedin, Twitter } from "lucide-react";
import { FaDribbble } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 gradient-bg opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="fade-in">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Creative{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Developer
            </span>
            & Designer
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            I craft exceptional digital experiences through innovative design and clean code. 
            Specializing in modern web applications with a focus on user experience and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection("projects")}
              className="gradient-bg text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              data-testid="button-view-work"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              data-testid="button-contact"
            >
              Get In Touch
            </Button>
          </div>
          <div className="flex space-x-6 mt-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-github"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-linkedin"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://dribbble.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-dribbble"
            >
              <FaDribbble size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-twitter"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
        <div className="lg:flex justify-center hidden">
          <div className="relative">
            <div className="w-80 h-80 rounded-3xl gradient-bg p-8 floating-animation">
              <div className="w-full h-full bg-accent rounded-2xl flex items-center justify-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/40 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-secondary rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
