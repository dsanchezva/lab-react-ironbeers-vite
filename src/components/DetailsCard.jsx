function DetailsCard(props) {
  const {
    name,
    image_url,
    tagline,
    contributed_by,
    _id,
    description,
    first_brewed,
    attenuation_level,
  } = props.beer;
  return (
    <div className="descriptionCard">
      <img src={image_url} alt="beer image" />
      <div className="DescriptionRows">
        <div className="DescriptionFirstRow">
          <h3>{name}</h3>
          <h4>{tagline}</h4>
        </div>
        <div className="DescriptionSecondRow">
          <p>{attenuation_level}</p>
          <p>{first_brewed}</p>
        </div>
      </div>
      <p>{description}</p>
      <p className="DetailsAuthor">{contributed_by}</p>
    </div>
  );
}

export default DetailsCard;
