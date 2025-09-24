import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import About from "@/components/about";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
