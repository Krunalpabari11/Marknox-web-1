import React from "react";
import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import { ArrowSection } from "./Components/ArrowSection";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";

import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import Portfolio from "./Components/Portfolio";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ArrowSection />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
