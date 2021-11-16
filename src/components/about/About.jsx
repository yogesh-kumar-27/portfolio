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
            Hi there! I am Yogesh! I am a front end web developer Knowledgeable
            Front End Developer adept at creating successful websites that meet
            customer needs. Specializing in collaborating with every customers
            to gather requirements, produce plans and improve designs for
            usability and functionality. Fully proficient in html, css and
            javascript.My passion lies in learning about the latest
            technologies.
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
        </div>
      </div>
    </section>
  );
}
