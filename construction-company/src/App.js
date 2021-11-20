import Layout from "./components/Layout/Layout";

import './App.css';
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Best from "./components/Thebest/Best";
import Features from "./components/Features/Features";
import Projects from "./components/OurProjects/Projects";
import Eco from "./components/Eco/Eco";
import Engineering from "./components/Engineering/Engineering";
import Partners from "./components/Partners/Partners";
import Dna from "./components/Dna/Dna";
import CTA from "./components/Layout/CTA";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Best />
      <Features />
      <Projects />
      <Eco />
      <Engineering />
      <Partners />
      <Dna />
      <CTA />
    </Layout>
  );
}

export default App;



