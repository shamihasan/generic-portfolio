import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects"; // Import the new Projects component

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects /> {/* Add the Projects component here */}
    </main>
  );
}
