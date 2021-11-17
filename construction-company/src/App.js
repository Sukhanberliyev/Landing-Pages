import Layout from "./components/Layout/Layout";

import './App.css';
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Best from "./components/Thebest/Best";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Best />
    </Layout>
  );
}

export default App;



