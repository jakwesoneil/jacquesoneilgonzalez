"use client";

import { AnimatedInfos } from "@/components/ui/animated-info";
import { infos } from "@/data";

export default function AboutMe() {
  return (
    <section id="About" className="py-10">
      <h2 className="heading text-center mb-10">
        About <span className="text-yellow-400">Me</span>
      </h2>
      <AnimatedInfos infos={infos} autoplay />
    </section>
  );
}
