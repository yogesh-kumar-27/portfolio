import Men from "../../images/me.png";
import Resume from "../../images/yogesh_kumar.pdf";
export default function About() {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        {" "}
        <span> about </span> me{" "}
      </h1>

      <div className="row">
        <div className="image">
          <img className="tilt" src={Men} alt="" />
        </div>

        <div className="content">
          <h3>
            {" "}
            My name is <span> Yogesh kumar </span>{" "}
          </h3>
          <p className="info">
            {" "}
            Hi there! I am Yogesh! I am a Enthusiastic front end web developer,
            am interested in IT and everything in its orbit., I am looking for a
            company willing to offer me a placement among their developers. In
            return, I would offer my full commitment, and be a pleasant and
            friendly addition to your team. I am therefore currently looking for
            a job or an internship as a front-end developer.My passion lies in
            learning about the latest technologies.
          </p>
          <a
            href={Resume}
            download="yogesh-resume"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            download CV
          </a>

          <div className="box-container">
            <div className="box">
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
                <span> experience : </span> fresher{" "}
              </p>
              <p>
                {" "}
                <span> freelance : </span> available{" "}
              </p>
            </div>
            <div className="box">
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
                <span> email : </span> yk6130814@gmail.com
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
