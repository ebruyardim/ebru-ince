import type React from "react";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu when a link is clicked

    const element = document.getElementById(id);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="group relative">
            <div className="flex items-baseline">
              <span className="text-xl font-bold">
                <span className="text-primary">Ebru</span>
                <span className="relative inline-block">
                  <span className="relative z-10">İnce</span>
                  <span className="absolute -bottom-1 left-0 w-full h-2 bg-primary/20 rounded-full transform origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
                </span>
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-primary ml-1.5 animate-pulse"></div>
            </div>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#home"
            onClick={(e) => handleScroll(e, "home")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About Me
          </a>
          {/* <a
            href="#projects"
            onClick={(e) => handleScroll(e, "projects")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Projects
          </a> */}
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <a
                href="#home"
                onClick={(e) => handleScroll(e, "home")}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "about")}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                About Me
              </a>
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, "projects")}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
