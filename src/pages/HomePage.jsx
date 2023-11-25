import { Link } from "react-router-dom";

function HomePage() {


    return (
        <div className="homePage">
            <div className="Link-container">
            <Link to="/beers">
                <img src="./src/assets/beers.png" alt="bar-image" />
                <h3>All Beers</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget congue magna, sed pharetra turpis. Morbi pretium erat enim, non.</p>
            </Link>
            </div>
            <div className="Link-container">
            <Link to="/random-beer ">
                <img src="./src/assets/random-beer.png" alt="beer-img" />
                <h3>Random Beer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ut diam condimentum vehicula. Phasellus sit amet tempor libero. Cras in porttitor justo, sit amet mollis nunc. Fusce vehicula tristique.</p>
            </Link>
            </div>
            <div className="Link-container">
            <Link to="/new-beer">
                <img src="./src/assets/new-beer.png" alt="beer-img" />
                <h3>New Beer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales lorem et metus congue, nec scelerisque nisi facilisis. Fusce sodales nunc sit amet massa dapibus, auctor venenatis lectus maximus. Mauris.</p>
            </Link>
            </div>
        
        </div>
    )
}

export default HomePage;
