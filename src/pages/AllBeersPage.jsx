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
const [query, setQuery] = useState("");



useEffect(()=> {
    getData()
},[])

const getData = async ()=> {
    try{
    const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
    // const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q={${searchValue}}`)
    setbeerList(response.data);
    setIsLoading(false)

} catch(err){
    console.log(err)
}

}
const handleSearch = async (event) => {
setQuery(event.target.value)
console.log("probando")
if (query === "") {
    getData()
} 
try {
    const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
    setbeerList(response.data)
    console.log(beerList)
} catch(err) {
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
        
                <label for="search">Search</label>
                <input type="text" name="search"  onChange={handleSearch} value={query}/>
            
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
