import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="font-bold text-2xl tracking-tighter mb-2">
            AL<span className="text-primary">.</span>
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Akshay Lagad. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:akshay@example.com"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
