import React from "react";

type Section = {
  title: string;
  backgroundColor: string;
  Component: React.ComponentType;
};

type NavigationProps = {
  sections: Section[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

export function Navigation({
  sections,
  activeIndex,
  setActiveIndex,
}: NavigationProps) {
  return (
    <nav className="col-span-4 sm:col-span-2 px-4 flex justify-between">
      {sections.map((section, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`py-2 font-medium ${
            activeIndex === index ? "text-gray-50" : "text-gray-400"
          }`}
          aria-current={activeIndex === index ? "page" : undefined}
        >
          {section.title}
        </button>
      ))}
    </nav>
  );
}
