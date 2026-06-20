"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "NeoSOFT Technologies, Pune",
    duration: "Dec 2025 – Present",
    description: [
      "Built scalable React.js/Next.js applications using Micro-frontend Architecture and Module Federation.",
      "Developed PWAs with offline support, push notifications, and API-driven dynamic UIs.",
      "Led performance optimization, debugging, code reviews, and mentored junior developers.",
      "Collaborated with clients and cross-functional teams to deliver business-critical solutions.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Aloha Technology Pvt. Ltd., Pune",
    duration: "Sep 2022 – Nov 2025",
    description: [
      "Developed high-performance React.js/Next.js applications and reusable component libraries.",
      "Built scalable, API-driven user interfaces for enterprise and customer-facing applications.",
      "Improved application performance, responsiveness, and cross-platform compatibility.",
      "Worked closely with clients, stakeholders, and development teams in Agile environments.",
    ],
  },
  {
    role: "Web Developer",
    company: "Primal Infosys Pvt. Ltd.",
    duration: "Jun 2021 – Sep 2022",
    description: [
      "Developed responsive web applications using HTML, CSS, Bootstrap, JavaScript, and React.js.",
      "Migrated legacy websites to React.js and integrated REST APIs.",
      "Implemented form validations, state management, and frontend performance improvements.",
      "Supported frontend-backend integration using Node.js and Express.js.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-10 relative pl-8"
            >
              <div className="absolute -left-[9px] top-6 h-4 w-4 rounded-full bg-primary ring-4 ring-background shadow-md" />

              <div className="glass p-6 md:p-8 rounded-2xl w-full hover:shadow-xl transition-shadow border-l-4 border-l-primary">
                <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Briefcase className="h-6 w-6 text-primary" />
                  {exp.role}
                </h3>
                <h4 className="text-lg font-medium text-foreground/90 mt-1 pl-8">
                  {exp.company}
                </h4>
                <div className="flex items-center gap-2 text-sm text-primary mt-2 mb-6 font-semibold bg-primary/10 w-fit px-3 py-1 rounded-full ml-8">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.duration}</span>
                </div>
                <ul className="list-none space-y-3">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/80">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 shrink-0" />
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
