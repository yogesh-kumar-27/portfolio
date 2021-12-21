export default function PortfolioCard({ image, link, github }) {
  return (
    <div className="box tilt">
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
