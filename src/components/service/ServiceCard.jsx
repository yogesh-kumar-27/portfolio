import AOS from "aos";
import { useEffect } from "react";
export default function ServiceCard({ image, title, desc, link }) {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
      <div className="box"  data-aos="fade-up"
      >
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p> {desc} </p>
        <button className="btn">learn more</button>
      </div>
  );
}
