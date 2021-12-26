import Men from "../../images/logo.png";
import Typed from "typed.js";
import { useEffect } from "react";
import Tilt from "react-tilt";
import Particles from "react-tsparticles";

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
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <section className="home" id="home">
      <div className="particle">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#e38528",
              },
              links: {
                color: "#ff5421",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
      </div>
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
          i am a <span className="typing-text"></span>{" "}
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
            href="https://github.com/yogesh-kumar-27"
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
