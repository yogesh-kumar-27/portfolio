export default function ServiceCard({ image, title, desc, link }) {
  return (
      <div className="box ">
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p> {desc} </p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          read more
        </a>
      </div>
  );
}
