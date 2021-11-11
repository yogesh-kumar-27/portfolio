import { useForm } from "react-hook-form";
import { useRef } from "react";
import emailjs from 'emailjs-com';
import img from "../../images/contact-img.svg";
import Tilt from 'react-tilt';
export default function Contact() {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
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
        },
        (error) => {
          console.log(error.text);
        }
      );

    reset();
  };
  const onError = (errors) => {
    console.log(errors);
  };
  return (
    <>
      <section class="contact" id="contact">
        <h1 class="heading">
          {" "}
          contact <span> me </span>{" "}
        </h1>

        <div class="row">
          <div class="image">
            <Tilt>
            <img class="tilt" src={img} alt="" />
            </Tilt>
          </div>

          <form ref={form} onSubmit={handleSubmit(onSubmitForm, onError)}>
            <div class="inputBox">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="name"
                {...register("name", { required: "Name is Required" })}
                onKeyUp={() => {
                  trigger("name");
                }}
              />
              {errors.name && <small>{errors.name.message}</small>}
              <input
                type="text"
                id="email"
                name="email"
                placeholder="email"
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && <small>{errors.email.message}</small>}
            </div>

            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="subject"
              className={`box ${errors.subject && "invalid"}`}
              {...register("subject", {
                required: "subject is Required",
              })}
              onKeyUp={() => {
                trigger("subject");
              }}
            />
            {errors.subject && <small>{errors.subject.message}</small>}

            <textarea
              placeholder="message"
              id="message"
              name="message"
              cols="30"
              rows="10"
              {...register("message", {
                required: "message is Required",
              })}
              onKeyUp={() => {
                trigger("message");
              }}
            />
            {errors.message && <small>{errors.message.message}</small>}

            <input type="submit" class="btn" value="Send" />
          </form>
        </div>
      </section>
      <footer class="footer">
        {" "}
        created by <span>  React.Js ❤️</span>{" "}
      </footer>
    </>
  );
}