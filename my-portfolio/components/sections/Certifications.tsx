"use client";

import { motion } from "framer-motion";
import { Award, Zap, Code } from "lucide-react";

const achievements = [
  {
    title: "B.E - Computer Engineering",
    description: "Pune University, Pune, Maharashtra (Aug 2018 - May 2021). Built a strong foundation in computer science principles and software engineering.",
    icon: <Award className="h-8 w-8 text-primary" />,
  },
  {
    title: "5.1+ Years of Experience",
    description: "Extensive background in Software Development, delivering responsive, secure, and user-centric applications.",
    icon: <Code className="h-8 w-8 text-primary" />,
  },
  {
    title: "Performance & UI Architecture",
    description: "Proven track record of optimizing application performance, leading code reviews, and building Micro-Frontend architectures.",
    icon: <Zap className="h-8 w-8 text-primary" />,
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Decorative blurred blob */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Education & <span className="text-primary">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 rotate-3 hover:rotate-0 transition-transform shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
