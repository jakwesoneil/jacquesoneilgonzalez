"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/cards-carousel";
import { exps } from "@/data";

export default function Experience() {
  const cards = [...exps]
    .reverse()
    .map((exp, index) => {
      const contentNode: React.ReactNode = null;

      return (
        <Card
          key={`${exp.src}-${index}`}
          card={{
            ...exp,
            content: contentNode,
          }}
          index={index}
          layout
        />
      );
    });

  return (
    <section id="experience" className="py-10">
      <h2 className="heading text-center mb-10">
        Working <span className="text-yellow-400">Experience</span>
      </h2>
      <div className="w-full h-full py-6">
        <Carousel items={cards} />
      </div>
    </section>
  );
}

