import "./App.css";
import Service from "./components/service/Service";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service/>
      <Portfolio/>
      <Contact/>
    </div>
  );
};

export default App;

