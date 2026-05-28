import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements"; // Import the new Achievements component

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Achievements /> {/* Add the Achievements component here */}
    </main>
  );
}
