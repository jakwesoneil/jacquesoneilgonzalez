import { navBarItems } from "../data";
import { FloatingDock } from "@/components/ui/flocking-dock";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import { Certifications } from "@/components/Certifications";
import { Projects } from "@/components/Projects";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main
      className="relative bg-blue-950 flex
    justify-center items-center flex-col overflow-hidden
    mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <FloatingDock items={navBarItems} desktopClassName="fixed bottom-6 left-1/2 -translate-x-1/2 z-50" />
        <Hero />
        <AboutMe />
        <Certifications/>
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
