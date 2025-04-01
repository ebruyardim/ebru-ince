export default function About() {
  const technologies = [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Redux",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Tailwind",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Material UI",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Spring",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Flutter",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "CI/CD",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container">
        <div className="flex flex-col gap-2 text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <img
                src="./public/profil.jpeg"
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-medium">Who I Am</h3>
            <p className="text-muted-foreground">
              I'm a fullstack developer with 2 years of experience, focused on
              React. I enjoy creating smooth and easy-to-use web applications
              that are both functional and visually appealing. My goal is to
              build digital experiences that feel effortless and intuitive for
              users.
            </p>

            <div className="mt-8">
              <h4 className="text-xl font-medium mb-4">
                Technologies I Work With
              </h4>
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-8 gap-x-4">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center group"
                  >
                    <div className="relative w-14 h-14 flex items-center justify-center mb-2">
                      {/* Subtle glow effect on hover */}
                      <div className="absolute inset-0 bg-primary/0 rounded-full blur-md transition-all duration-300 group-hover:bg-primary/10"></div>

                      <img
                        src={tech.logo || "/placeholder.svg"}
                        alt={tech.name}
                        className="w-10 h-10 relative z-10 transition-all duration-300 group-hover:scale-110 drop-shadow-sm"
                      />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
