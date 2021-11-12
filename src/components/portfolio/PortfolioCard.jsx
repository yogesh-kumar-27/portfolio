export default function PortfolioCard({ image, link }) {
  return (
      <div className="box tilt">
        <img src={image} alt="" />
        <div className="content">
          <a  rel="noreferrer" target="_blank" href={link} className="btn">
            learn more
          </a>
        </div>
      </div>
  );
}
