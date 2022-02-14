import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import img from "../../images/contact-img.svg";
export default function Contact() {
  const [done, setDone] = useState(false);
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmitForm = () => {
    emailjs
      .sendForm(
        "service_0goljbm",
        "template_m0bam5t",
        form.current,
        "user_3ucgXg3bgJghTt15gB2m2"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
          setDone(false);
        }
      );

    reset();
  };
  const onError = (errors) => {
    console.log(errors);
  };
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          {" "}
          contact <span> me </span>{" "}
        </h1>
        {done ? (
          <div className="contact-done">
            <h1 className="heading">Thank you for contacting me.</h1>
            <p className="heading">I will get back to you as soon as possible.</p>
          </div>
        ) : (
          <>
            <div className="row">
              <div className="image">
                <img src={img} alt="" />
              </div>

              <form ref={form} onSubmit={handleSubmit(onSubmitForm, onError)}>
                <div className="inputBox">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="name"
                    {...register("name", { required: true })}
                  />
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="email"
                    {...register(
                      "email",
                      { required: true },
                      {
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      }
                    )}
                  />
                </div>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="subject"
                  className="box"
                  {...register("subject", {
                    required: true,
                  })}
                />

                <textarea
                  placeholder="message"
                  id="message"
                  name="message"
                  cols="30"
                  rows="10"
                  {...register("message", { required: true })}
                />
                <div className="error">
                  {errors.name && <em>- the name field is required</em>}
                  {errors.email && <em>- the email field is required</em>}
                  {errors.subject && <em>- the subject field is required</em>}
                  {errors.message && <em>- the message field is required</em>}
                </div>
                <input type="submit" className="btn" value="Send" />
              </form>
            </div>
          </>
        )}
      </section>

      {/* <footer className="footer">
        {" "}
        created by <span> Mahakal ❤️ </span>{" "}
      </footer> */}
    </>
  );
}
