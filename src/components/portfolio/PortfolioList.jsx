export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "btn active" : "btn"}
      onClick={() => setSelected(id)}
    >{title}</li>
  );
}
