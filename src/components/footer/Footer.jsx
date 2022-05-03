import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            {" "}
            <a href="#about">About</a>
          </li>
          <li>
            {" "}
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            {" "}
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="share">
          <a
            href="https://www.facebook.com/profile.php?id=100007787105543"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com/YogeshK3132"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/itsmeyogeshkumar27/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/yogesh-kumar-772b11228/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/yogesh-kumar-27"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
    </footer>
  );
};

export default Footer;
