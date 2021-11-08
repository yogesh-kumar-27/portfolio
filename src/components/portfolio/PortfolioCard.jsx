import Tilt from "react-tilt";

export default function PortfolioCard({ image, link }) {
  return (
    <Tilt className="box tilt">
      <div>
        <img src={image} alt="" />
        <div className="content">
          <a  rel="noreferrer" target="_blank" href={link} className="btn">
            learn more
          </a>
        </div>
      </div>
    </Tilt>
  );
}
