import { useState } from "react";
import Home from "./features/Home";
import About from "./features/about";
import Hobies from "./features/hobies";
import Contact from "./features/contact";

const sections = [
  { title: "Home", backgroundColor: "bg-stone-200", Component: Home },
  { title: "About Me", backgroundColor: "bg-sky-50", Component: About },
  { title: "Hobbies", backgroundColor: "bg-indigo-50", Component: Hobies },
  { title: "Contact", backgroundColor: "bg-emerald-50", Component: Contact },
];

/* eslint-disable @typescript-eslint/no-unused-vars */
function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <header className="grid grid-cols-4 items-center h-16 bg-stone-700 p-4">
        <div className="col-span-1 hidden sm:block"></div>
        <div className="col-span-4 sm:col-span-2 px-4 flex justify-between">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`py-2 font-medium ${
                activeIndex === index ? "text-gray-50" : "text-gray-400"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
        <div className="col-span-1 hidden sm:block"></div>
      </header>
      <main className="flex-1 relative overflow-hidden">
        <div
          className={`flex w-full h-full transition-transform duration-500 ease-in-out`}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {sections.map((section) => (
            <div
              key={section.title}
              className={`min-w-full h-full flex items-center justify-center ${section.backgroundColor}`}
            >
              <section.Component />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
