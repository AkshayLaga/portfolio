"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend Technologies",
    skills: [
      { name: "React.js & Next.js", proficiency: 95 },
      { name: "JavaScript (ES6+) & TypeScript", proficiency: 90 },
      { name: "Redux Toolkit & RTK Query", proficiency: 90 },
      { name: "HTML5 & CSS3 (SCSS, Tailwind, Bootstrap)", proficiency: 95 },
      { name: "Macro-Frontend Architecture", proficiency: 85 },
      { name: "Axios", proficiency: 90 },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.JS & Express.JS", proficiency: 80 },
      { name: "MongoDB", proficiency: 75 },
      { name: "RESTful APIs", proficiency: 90 },
    ],
  },
  {
    category: "Version Control & CI/CD",
    skills: [
      { name: "Git & GitHub", proficiency: 90 },
      { name: "GitHub Actions", proficiency: 80 },
      { name: "Jenkins", proficiency: 75 },
    ],
  },
  {
    category: "Testing, Debugging & Design Tools",
    skills: [
      { name: "Jest", proficiency: 80 },
      { name: "Postman & Swagger", proficiency: 85 },
      { name: "Chrome DevTools & Browser Stack", proficiency: 90 },
      { name: "VS Code & Visual Studio 2022", proficiency: 95 },
      { name: "Figma & Zeplin", proficiency: 80 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mx-auto">
          {skillsData.map((categoryGroup, idx) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                {categoryGroup.category}
              </h3>
              <div className="flex flex-col gap-5">
                {categoryGroup.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground/80">
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold text-primary">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
