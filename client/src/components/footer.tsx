import { Github, Linkedin, Twitter } from "lucide-react";
import { FaDribbble } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaDribbble, href: "https://dribbble.com", label: "Dribbble" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">Alex Morgan</div>
          <p className="text-background/70 mb-6">Creating exceptional digital experiences</p>
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background transition-colors"
                  data-testid={`footer-${social.label.toLowerCase()}`}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
          <div className="border-t border-background/20 pt-8">
            <p className="text-background/70 text-sm">
              © 2024 Alex Morgan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
