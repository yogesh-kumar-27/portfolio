import { useEffect, useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const menutoggle = () => {
    let navbar = document.querySelector('.header .navbar');

    document.querySelector('#menu-btn').onclick = () =>{
        navbar.classList.add('active');
    }
    
    document.querySelector('#nav-close').onclick = () =>{
        navbar.classList.remove('active');
    }
  };
  const themeToggle = () => {
    let themeToggler = document.querySelector("#theme-toggler");

    themeToggler.onclick = () => {
      themeToggler.classList.toggle("fa-sun");
      if (themeToggler.classList.contains("fa-sun")) {
        document.body.classList.add("active");
      } else {
        document.body.classList.remove("active");
      }
    };
  };
  useEffect(() => {
    menutoggle();
    themeToggle();
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      menutoggle();
      themeToggle();
      window.addEventListener("scroll", transitionNavbar);
    };
  }, []);
  return (
    <>
  <header className={`header ${show && "header_fixed"}`}>
    <a href="#home" className="logo"> <i className="fas fa-code"></i> code. </a>

    <nav className="navbar">
      <div id="nav-close" className="fas fa-times"></div>
      <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#services">services</a>
          <a href="#portfolio">portfolio</a>
          <a href="#contact">contact</a>
    </nav>

    <div className="icons">
      <div id="menu-btn" className="fas fa-bars"></div>
      <div id="theme-toggler" className="fas fa-moon"></div>
    </div>
  </header>
      
    </>
  );
}
