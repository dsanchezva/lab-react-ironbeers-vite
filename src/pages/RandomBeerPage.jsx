import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import DetailsCard from "../components/DetailsCard";

function RandomBeersPage() {
  const [beerDetail, setBeerDetail] = useState(null);
  const [Loading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/random`
    );
    console.log(response.data);
    setBeerDetail(response.data);
    setIsLoading(false);
  };

  if (Loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <Navbar />
      <DetailsCard beer={beerDetail} />
    </div>
  );
}

export default RandomBeersPage;
