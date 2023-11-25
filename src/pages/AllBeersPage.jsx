import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import BeerCard from "../components/BeerCard";
import { Link } from "react-router-dom";

//spiner import
// import GridLoader from "react-spinners/GridLoader"




function AllBeersPage() {
const [beerList, setbeerList] = useState(null);
const [isLoading, setIsLoading] = useState(true);

let linkUrl;

useEffect(()=> {
    getData()
},[])

const getData = async ()=> {
    try{
    const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
    console.log(response.data)
    setbeerList(response.data);
    setIsLoading(false)

} catch(err){
    console.log(err)
}

}

if (isLoading) {
    return (
        <div> 
            <h2>Loading ...</h2>
        </div>
    )
}
    return (
        <div>
            <Navbar/>
            <div className="beerList">
             {beerList.map((each, index) => {
                return(
                        <BeerCard key={index} beer={each}/>
                )
             })
             }
                </div>       
        </div>
    )
}

export default AllBeersPage;
