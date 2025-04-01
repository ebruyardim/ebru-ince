import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import About from "./features/About";
import Contact from "./features/Contact";
import Home from "./features/Home";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Home />
        <About />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
