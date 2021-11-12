import Men from "../../images/me.png";
import Resume from "../../images/yogesh_kumar.pdf";
export default function About() {
  return (
    <section class="about" id="about">
      <h1 class="heading">
        {" "}
        about <span>me</span>{" "}
      </h1>

      <div class="row">
        <div class="image">
        <img class="tilt" src={Men} alt="" />
        </div>

        <div class="content">
          <h3>
            {" "}
            my name is <span> yogesh kumar </span>{" "}
          </h3>
          <p class="info">
            {" "}
            Hi there! I am Yogesh! I am a front end web developer with a strong
            interest in projects requiring conceptual and analytical thinking. I
            enjoy designing websites with end users in mind. specializing in
            HTML websites and phone applications.Have done numerous projects
            involving front and back end development.My passion lies in learning
            about the latest technologies.
          </p>
          <a
            href={Resume}
            download="yogesh-resume"
            target="_blank"
            rel="noopener noreferrer"
            class="btn"
          >
            download CV
          </a>

          <div class="box-container">
            <div class="box">
              <p>
                {" "}
                <span> age: </span> 21{" "}
              </p>
              <p>
                {" "}
                <span> gender: </span> male{" "}
              </p>
              <p>
                {" "}
                <span> experience : </span> 1 years{" "}
              </p>
              <p>
                {" "}
                <span> freelance : </span> available{" "}
              </p>
            </div>
            <div class="box">
              <p>
                {" "}
                <span> language : </span> hindi / english{" "}
              </p>
              <p>
                {" "}
                <span> phone : </span> +91-9911498732{" "}
              </p>
              <p>
                {" "}
                <span> email : </span> yogeshkumar10@gmail.com
              </p>
              <p>
                {" "}
                <span> address : </span> Delhi, india{" "}
              </p>
            </div>
          </div>
          <div class="box-container">
            <div class="progress">
              <p>
                {" "}
                web design : <span>90%</span>{" "}
              </p>
              <div class="bar bar-1-1">
                <span></span>
              </div>
              <p>
                {" "}
                App design: <span>75%</span>{" "}
              </p>
              <div class="bar bar-1-2">
                <span></span>
              </div>
              <p>
                {" "}
                UI/UX design : <span>80%</span>{" "}
              </p>
              <div class="bar bar-1-3">
                <span></span>
              </div>
            </div>

            <div class="progress">
              <p>
                {" "}
                HTML : <span>95%</span>{" "}
              </p>
              <div class="bar bar-2-1">
                <span></span>
              </div>
              <p>
                {" "}
                CSS : <span>80%</span>{" "}
              </p>
              <div class="bar bar-2-2">
                <span></span>
              </div>
              <p>
                {" "}
                javascript : <span>65%</span>{" "}
              </p>
              <div class="bar bar-2-3">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
