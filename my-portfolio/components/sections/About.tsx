"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const strengths = [
    "Micro-Frontend Architecture",
    "REST API Integration",
    "Performance Tuning",
    "Clean UI Design",
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="mx-auto glass p-8 md:p-12 rounded-2xl relative overflow-hidden">
          {/* Subtle background glow inside the card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative z-10"
          >
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              I am a results-oriented <strong className="text-foreground">Sr. Software Developer</strong> with over 5.1 years of experience delivering responsive, secure, and user-centric applications. My strong background spans <strong className="text-primary">JavaScript, TypeScript, React, Next.js</strong>, and <strong className="text-primary">REST API integration</strong>.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              I am deeply passionate about <strong className="text-foreground">clean UI design</strong>, performance tuning, and building seamless cross-platform experiences. Throughout my career, I have thrived in dynamic environments, tackling complex architectural challenges and creating intuitive interfaces that drive business value.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Key Strengths</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground/90">{strength}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
