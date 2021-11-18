import Layout from "./components/Layout/Layout";

import './App.css';
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Best from "./components/Thebest/Best";
import Features from "./components/Features/Features";
import Projects from "./components/OurProjects/Projects";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Best />
      <Features />
      <Projects />
    </Layout>
  );
}

export default App;



