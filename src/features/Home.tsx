import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section id="home" className="relative py-20 md:py-32">
      <div className="container flex flex-col items-center text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.15),transparent_50%)]" />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          Hi, I'm <span className="text-primary">Ebru</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-[600px] mb-8">
          I'm a creative developer specializing in building beautiful,
          functional websites and applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          {/* <Button size="lg" className="gap-2">
            View My Work
            <ArrowRight className="h-4 w-4" />
          </Button> */}
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                const offsetTop =
                  contactSection.getBoundingClientRect().top +
                  window.pageYOffset;
                window.scrollTo({
                  top: offsetTop,
                  behavior: "smooth",
                });
              }
            }}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
