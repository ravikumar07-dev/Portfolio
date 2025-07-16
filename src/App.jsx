import "./App.css";
import Navbar from "./navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Element } from "react-scroll";
import Background from "./assets/Background.webp";

function App() {
  return (
    <div>
      <img
        src={Background}
        alt="bg"
        loading="eager"
        className="fixed inset-0 w-full h-full object-cover blur-lg scale-110 -z-10"
      />
      <Navbar />

      {/* Scrollable Sections */}
      <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
