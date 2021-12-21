import data from './data'
import PortfolioCard from './PortfolioCard'
export default function Portfolio() {
    return (
       
    <section className="portfolio" id="portfolio">

    <h1 className="heading"> <span> my </span> portfolio </h1>

    <div className="box-container">

       {
        data.portfolioData?.map(({image, link,github}) =>(
            <PortfolioCard
                key={image}
                image={image}
                link={link}
                github={github}
            />
        ))
       }



    </div>

</section>
    )
}
