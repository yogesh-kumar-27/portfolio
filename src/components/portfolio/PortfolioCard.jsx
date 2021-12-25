import AOS from 'aos';
import { useEffect } from 'react';
export default function PortfolioCard({ image, link, github }) {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  
  return (
    <div className="box" data-aos="zoom-in">
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
}
