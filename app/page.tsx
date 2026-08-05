import About from "@/component/LandingPage/About";
import Certifications from "@/component/LandingPage/Certifications";
import Contact from "@/component/LandingPage/Contact";
import Experience from "@/component/LandingPage/Experience";
import Footer from "@/component/LandingPage/Footer";
import Hero from "@/component/LandingPage/Hero";
import Navbar from "@/component/LandingPage/Navbar";
import Projects from "@/component/LandingPage/Projects";
import Skills from "@/component/LandingPage/Skills";

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
