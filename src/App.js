import Service from "./components/service/Service";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";

const App = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <About />
      <Service/>
      <Portfolio/>
      <Contact/>
    </div>
  );
};

export default App;

