export default function ServiceCard({ image, title, desc, link }) {
  return (
      <div className="box ">
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p> {desc} </p>
        <button className="btn">learn more</button>
      </div>
  );
}
