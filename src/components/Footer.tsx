import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            {new Date().getFullYear()} Ebru Ince
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/ebruyardim"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-8 w-8" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ebru-ince/"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-8 w-8" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
