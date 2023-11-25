import { Link } from "react-router-dom";

function BeerCard(props) {
  const { name, image_url, tagline, contributed_by, _id } = props.beer;
  const urlLink = `/beers/${_id}`;
  return (
    <div className="beerCard">
      <Link to={urlLink} className="beerCard">
        <div className="cardImg">
          <img src={image_url} alt="beer image" />
        </div>
        <div className="cardInfo">
          <h3>{name}</h3>
          <h4>{tagline}</h4>
          <p>Created by: {contributed_by}</p>
        </div>
      </Link>
    </div>
  );
}

export default BeerCard;
