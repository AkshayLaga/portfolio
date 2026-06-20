"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/Button";

const projects = [
  {
    id: 1,
    title: "Cab booking App",
    description:
      "Developed an online cab booking platform with real-time ride workflows (driver assignment, status updates), Google Maps API integration, and secure backend services for user authentication and ride management.",
    image: "/project-placeholder.jpg",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Material UI", "TypeScript"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Survey & Feedback Analytics",
    description:
      "Developed a dynamic survey and feedback platform with reusable, configurable UI components for multiple question types. Optimized frontend performance using memoization and lazy loading to manage large datasets.",
    image: "/project-placeholder.jpg",
    technologies: ["React", "Next.js", "TypeScript", "React Query", "Styled Components"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "AgriTech / Agri-Community Platform",
    description:
      "Built Progressive Web Applications (PWAs) with offline caching and push notifications. Developed API-driven dynamic UIs and maintained secure backend services using Node.js, Express.js, and MongoDB.",
    image: "/project-placeholder.jpg",
    technologies: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Microfrontend"],
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Visa Booking Platform",
    description:
      "A visa administration portal developed from scratch using micro-frontend architecture. Features include Country/Visa Master modules, Visa Rules & Flow Manager for automated workflows, and an end-to-end Order Management system for the visa lifecycle.",
    image: "/project-placeholder.jpg",
    technologies: ["React", "TypeScript", "Vite", "RTK Query"],
    github: "#",
    live: "#",
  },
  {
    id: 5,
    title: "ERP System (Internal Platform)",
    description:
      "Responsive ERP interfaces for HR, inventory, procurement, and operations. Built with dynamic dashboards, reporting features, and optimized with lazy loading to enhance user productivity and workflow efficiency.",
    image: "/project-placeholder.jpg",
    technologies: ["React", "REST APIs", "TypeScript", "Node.js"],
    github: "#",
    live: "#",
  },
  {
    id: 6,
    title: "E-Commerce Platform",
    description:
      "A scalable e-commerce web application with seamless shopping workflows. Includes product listing, cart management, checkout, order tracking, and comprehensive admin dashboards with role-based access control.",
    image: "/project-placeholder.jpg",
    technologies: ["React", "REST APIs", "Node.js"],
    github: "#",
    live: "#",
  },
];

const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.technologies))
).sort();

export function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.technologies.includes(filter));

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          
          {/* Filter Buttons */}
          {/* <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={filter === "All" ? "default" : "outline"}
              onClick={() => setFilter("All")}
              className="rounded-full"
            >
              All
            </Button>
            {allTechnologies.map((tech) => (
              <Button
                key={tech}
                variant={filter === tech ? "default" : "outline"}
                onClick={() => setFilter(tech)}
                className="rounded-full"
              >
                {tech}
              </Button>
            ))}
          </div> */}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image Placeholder */}
                <div className="w-full h-48 bg-secondary relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 backdrop-blur-sm">
                    <span className="text-sm font-semibold">View Details</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
