import { Link } from "react-router-dom";

const HomeBanner = ()=>{
    return(
        <section className="homebanner">
            <div className="container">
               <div className="hero">
                    <h1 className="hero_title">Little Lemon Restaurant</h1>
                    <p className="hero_tagline">Welcome to the taste of Little Lemon</p>
                    <Link to="/reserve" className="hero_button">Reserve a table</Link>
               </div>
            </div>
        </section>
    )
}

export default HomeBanner;