import { useEffect } from "react";

export default function Header() {
  const menutoggle = () => {
    let menu = document.querySelector("#menu-bars");
    let header = document.querySelector("header");

    menu.onclick = () => {
      menu.classList.toggle("fa-times");
      header.classList.toggle("active");
    };

    window.onscroll = () => {
      menu.classList.remove("fa-times");
      header.classList.remove("active");
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
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <div id="menu-bars" className="fas fa-bars"></div>
      <div id="theme-toggler" className="fas fa-moon"></div>
    </>
  );
}
