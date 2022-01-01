import { useState, useEffect } from "react";
import {featuredPortfolio,ReactjsPortfolio,NextPortfolio} from "./data";
import PortfolioCard from "./PortfolioCard";
import PortfolioList from "./PortfolioList";
export default function Portfolio () {
  const [selected, setSelected] = useState("featured");
  const[data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "webReact",
      title: "react App",
    },
    {
      id: "nextjs",
      title: "next app",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "webReact":
        setData(ReactjsPortfolio);
        break;
      case "nextjs":
        setData(NextPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <section className="portfolio" id="portfolio">
      <h1 className="heading">
        {" "}
        <span> my </span> portfolio{" "}
      </h1>
      <div className="button">
        <ul>
          {list.map((item) => (
            <PortfolioList
              key={item.id}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
      </div>
      <div className="box-container">
        {data?.map(({ image, link, github }) => (
          <PortfolioCard
            key={image}
            image={image}
            link={link}
            github={github}
          />
        ))}
      </div>
    </section>
  );
};
