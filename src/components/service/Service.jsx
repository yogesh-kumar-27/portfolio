import data from "./data";
import ServiceCard from "./ServiceCard";
export default function Service() {
  return (
    <section className="services" id="services">
      <h1 className="heading">services</h1>

      <div className="box-container">
        {data.serviceData?.map(({ image, title, desc, link }) => (
          <ServiceCard
            key={title}
            image={image}
            title={title}
            desc={desc}
            link={link}
          />
        ))}
      </div>
    </section>
  );
}
