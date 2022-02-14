import scrollreveal from "scrollreveal";
import React,{useEffect} from "react";
const PortfolioCard = ({ image, link, github }) => {
  useEffect(() => {
    const animationEffect = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(`#box`,{
        interval: 500
      });
    }
  
    animationEffect();
    return () => {
      animationEffect();
    }
  }, [])
  return (
    <div className="box" id="box">
      <img src={image} alt="" />
      <div className="content">
        <a rel="noreferrer" target="_blank" href={link} className="btn">
          visit
        </a>
        <a rel="noreferrer" target="_blank" href={github} className="btn">
          github
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
