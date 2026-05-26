"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const techStack = [
  { name: "React", image: "/re.svg" },
  { name: "Next.js", image: "/next.svg" },
  { name: "Tailwind", image: "/tail.svg" },
  { name: "Node.js", image: "/nodejs.svg" },
  { name: "MongoDB", image: "/mongodb.svg" },
  { name: "Express", image: "/express.svg" },
  { name: "TypeScript", image: "/ts.svg" },
  { name: "GitHub", image: "/git.svg" },
  { name: "Postman", image: "/postman.svg" },
  { name: "Three.js", image: "/three.svg" },
  { name: "Vercel", image: "/vercel-logo.svg" },
  { name: "Git", image: "/git.svg" },
];

export default function TechStack() {
  return (
    <section className="py-24" id="tech-stack">
      <h1 className="heading mb-4">
        My <span className="text-purple">Tech Stack</span>
      </h1>

      <p className="text-center text-neutral-400 max-w-2xl mx-auto mb-14">
        Technologies and tools I use to craft scalable, interactive, and
        high-performance web applications.
      </p>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.08,
              y: -5,
            }}
            transition={{ duration: 0.2 }}
            className="
              group
              relative
              flex
              flex-col
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-black/40
              backdrop-blur-md
              p-6
              overflow-hidden
              hover:border-purple-500/40
              transition-all
              duration-300
            "
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-purple-500/10 blur-2xl" />

            <Image
              src={tech.image}
              alt={tech.name}
              width={55}
              height={55}
              className="object-contain relative z-10"
            />

            <p className="mt-4 text-sm text-white relative z-10">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}