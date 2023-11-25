import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import DetailsCard from "../components/DetailsCard";


function BeerDetailsPage() {
  const paramsbeerId = useParams();
  const [beerDetail, setBeerDetail] = useState(null);
  const [Loading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/${paramsbeerId.beerId}`
    );
    console.log(response.data);
    setBeerDetail(response.data);
    setIsLoading(false);
  };

  if (Loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>

    <Navbar/>
    <DetailsCard beer={beerDetail}/>
    </>
  );
}

export default BeerDetailsPage;
