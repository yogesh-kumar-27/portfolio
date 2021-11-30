import { useEffect } from "react";

export default function Navbar() {
  const menutoggle = () => {
    let navbar = document.querySelector('.header .navbar');

    document.querySelector('#menu-btn').onclick = () =>{
        navbar.classList.add('active');
    }
    
    document.querySelector('#nav-close').onclick = () =>{
        navbar.classList.remove('active');
    }
    
    window.onscroll = () =>{
        navbar.classList.remove('active');
    
        if(window.scrollY > 50){
            document.querySelector('.header').classList.add('active');
        }else{
            document.querySelector('.header').classList.remove('active');
        }
    };
    
    window.onload = () =>{
        if(window.scrollY > 50){
            document.querySelector('.header').classList.add('active');
        }else{
            document.querySelector('.header').classList.remove('active');
        }
    };
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
    return () => {
      menutoggle();
      themeToggle();
    };
  }, []);
  return (
    <>
  <header className="header">
    <a href="#home" className="logo"> <i className="fas fa-code"></i> travel. </a>

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
