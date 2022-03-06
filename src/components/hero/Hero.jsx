import Men from "../../images/logo.png";
import Typed from "typed.js";
import { useEffect } from "react";
import Tilt from "react-tilt";

export default function Hero() {
  useEffect(() => {
    var typed = new Typed(".typing-text", {
      strings: ["front end developer", "web designer", "web developer"],
      loop: true,
      typeSpeed: 150,
      backSpeed: 100,
      backDelay: 100,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
    
      <div className="content">
        <Tilt>
          <img className="tilt" src={Men} alt="" />
        </Tilt>
        <h3>
          {" "}
          yogesh <span>Kumar</span>{" "}
        </h3>
        <p>
          {" "}
          I am a <span className="typing-text"></span>{" "}
        </p>
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
        <a href="#about" className="btn">
          about me
        </a>
      </div>
    </section>
  );
}
