import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navigation() {
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
          <Link to="/" className="text-xl font-bold">
            Portfolio
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="#home"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
              handleScroll(e, "home")
            }
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="#about"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
              handleScroll(e, "about")
            }
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About Me
          </Link>
          <Link
            to="#projects"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
              handleScroll(e, "projects")
            }
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link
            to="#contact"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
              handleScroll(e, "contact")
            }
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
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
              <Link
                to="#home"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  handleScroll(e, "home")
                }
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                to="#about"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  handleScroll(e, "about")
                }
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                About Me
              </Link>
              <Link
                to="#projects"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  handleScroll(e, "projects")
                }
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                to="#contact"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  handleScroll(e, "contact")
                }
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
