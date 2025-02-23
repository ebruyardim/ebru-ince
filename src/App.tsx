import { useState } from "react";
import Home from "./features/Home";
import { Navigation } from "./components/Navigation";
import About from "./features/About";
import Hobbies from "./features/Hobbies";
import contact from "./features/Contact";

const sections = [
  { title: "Home", backgroundColor: "bg-rose-50", Component: Home },
  { title: "About Me", backgroundColor: "bg-sky-50", Component: About },
  { title: "Hobbies", backgroundColor: "bg-indigo-50", Component: Hobbies },
  { title: "Contact", backgroundColor: "bg-emerald-50", Component: contact },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <header className="grid grid-cols-4 items-center h-16 bg-stone-700 p-4">
        <div className="col-span-1 hidden sm:block"></div>
        <Navigation
          sections={sections}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
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
