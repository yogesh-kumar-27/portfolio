import React,{useEffect} from "react";
import Service from "./components/service/Service";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import scrollreveal from "scrollreveal";
const App = () => {

  useEffect(() => {
    const animationEffect = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(`.header,.hero,.box,.about,.service,.portfolio,.contact`,{
        interval: 500
      });
    }
  
    animationEffect();
    return () => {
      animationEffect();
    }
  }, [])
  
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
