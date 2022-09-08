import React, {useState} from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Home menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <About />
      <Skills />
      <Work />
      <Contact/>
    </div>
  );
}

export default App;