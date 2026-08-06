import About from "@/component/Landing/About";
import Certifications from "@/component/Landing/Certifications";
import Contact from "@/component/Landing/Contact";
import Experience from "@/component/Landing/Experience";
import Footer from "@/component/Landing/Footer";
import Hero from "@/component/Landing/Hero";
import Navbar from "@/component/Landing/Navbar";
import Projects from "@/component/Landing/Projects";
import Skills from "@/component/Landing/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
