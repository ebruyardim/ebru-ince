import { Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary/40 via-background to-background"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      </div>

      <div className="container max-w-3xl">
        <div className="flex flex-col gap-2 text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
            Get In Touch with me
          </h2>
          <p className="mx-auto max-w-[500px] text-muted-foreground text-sm">
            Have a project in mind or want to chat? Connect with me through
            social media.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              className="gap-3 rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5"
              asChild
            >
              <a
                href="https://linkedin.com/in/ebru-ince"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              className="gap-3 rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5"
              asChild
            >
              <a
                href="https://github.com/ebruyardim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>

          <div className="flex mt-6 text-center items-center gap-2">
            <MapPin className="h-5 w-5" />
            <p className="text-muted-foreground text-sm mt-1">Netherlands</p>
          </div>
        </div>
      </div>
    </section>
  );
}
