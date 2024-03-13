import AboutMe from "@/sections/AboutMe.jsx";
import HeroSection from "@/sections/HeroSection.jsx";
import Projects from "@/sections/Projects.jsx";

export default function Home() {
  return (
    <main className="relative w-full h-full ">
      <HeroSection/>
      <AboutMe/>
      <Projects/>
    </main>
  );
}
