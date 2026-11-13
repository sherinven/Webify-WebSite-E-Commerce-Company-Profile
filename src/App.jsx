import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div id="home"><Hero /></div>
        <About />
        <Services />
        <Projects />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;