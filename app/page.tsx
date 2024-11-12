import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import  Grid  from "@/components/ui/Grid"
import Projects from "@/components/ui/Projects";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-blue-950 flex
    justify-center items-center flex-col overflow-hidden
    mx-auto sm:px-10 px-5">
      <div className ="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <Projects/>
      </div>
    </main>
  );
}
