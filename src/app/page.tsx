import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact"; // Import the new Contact component
import Footer from "@/components/Footer";   // Import the new Footer component

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Achievements />
      <Contact /> {/* Add the Contact component here */}
      <Footer />  {/* Add the Footer component here */}
    </main>
  );
}
