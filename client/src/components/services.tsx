import { 
  Laptop, 
  Palette, 
  Smartphone, 
  Rocket, 
  Users, 
  Settings 
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Laptop,
      title: "Web Development",
      description: "Full-stack web applications using modern frameworks and technologies",
      features: [
        "React & Next.js Development",
        "API Integration & Development",
        "Database Design & Optimization",
        "Performance Optimization"
      ]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality",
      features: [
        "User Interface Design",
        "User Experience Research",
        "Prototyping & Wireframing",
        "Design System Creation"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications with native performance",
      features: [
        "React Native Development",
        "PWA Development",
        "App Store Optimization",
        "Cross-platform Solutions"
      ]
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Maximize your application's speed and user experience",
      features: [
        "Core Web Vitals Optimization",
        "Bundle Size Reduction",
        "SEO Optimization",
        "Accessibility Compliance"
      ]
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Strategic guidance for your digital transformation journey",
      features: [
        "Technical Architecture Review",
        "Technology Stack Selection",
        "Code Quality Assessment",
        "Team Training & Mentoring"
      ]
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Ongoing support to keep your applications running smoothly",
      features: [
        "Bug Fixes & Updates",
        "Security Monitoring",
        "Feature Enhancements",
        "24/7 Technical Support"
      ]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Services & Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="card-hover bg-card p-8 rounded-xl shadow-sm text-center"
                data-testid={`service-${service.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
