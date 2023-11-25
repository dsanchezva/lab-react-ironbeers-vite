import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
const redirect = useNavigate()
    //stados del formulario
const [name, setName] = useState("");
const [tagline, setTagline] = useState("");
const [description, setDescription] = useState("");
const [firstBrewed, setFirstBrewed] = useState("");
const [brewersTips, setBrewersTips] = useState("");
const [attenuationLevel, setAttenuationLevel] = useState(0);
const [contributedBy, setContributedBy] = useState("");

//handles para actualizar los campos
const handleName = (event) => {setName(event.target.value)}
const handleTagline = (event) => {setTagline(event.target.value)}
const handleDescription = (event) => {setDescription(event.target.value)}
const handleFirstBrewed = (event) => {setFirstBrewed(event.target.value)}
const handleBrewersTips = (event) => {setBrewersTips(event.target.value)}
const handleAttenuationLevel = (event) => {setAttenuationLevel(event.target.value)}
const handleContributedBy = (event) => {setContributedBy(event.target.value)}


//conectamos con la base de datos 
const sendData = async (event) => {
event.preventDefault(); //para quitar el comportamiento por defecto del navegador
const newBeer = {
    name,
    tagline,
    description,
    first_brewed: firstBrewed,
    brewers_tips: brewersTips,
    attenuation_level: attenuationLevel,
    contributed_by: contributedBy,
}

try {

    const response = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new" , newBeer);

    redirect("/beers")

}catch (err) {
    console.log(err)
}

}




    return (
        
        <form onSubmit={sendData}>

            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={handleName} value={name}/>
            <hr />
            <label htmlFor="tagline">Tagline</label>
            <input type="text" name="tagline" onChange={handleTagline} value={tagline}/>
            <hr />
            
            <label htmlFor="description">Description</label>
            <textarea type="text" name="description" onChange={handleDescription} value={description}/>
            <hr />
            
            <label htmlFor="first_brewed">First Brewed</label>
            <input type="text" name="first_brewed" onChange={handleFirstBrewed} value={firstBrewed}/>
            <hr />
            
            <label htmlFor="brewers_tips">Brewed Tips</label>
            <input type="text" name="brewers_tips" onChange={handleBrewersTips} value={brewersTips}/>
            <hr />
            
            <label htmlFor="attenuation_level">Attenuation Level</label>
            <input type="number" name="attenuation_level" onChange={handleAttenuationLevel} value={attenuationLevel}/>
            <hr />
            
            <label htmlFor="contributed_by">Contributed By</label>
            <input type="text" name="contributed_by" onChange={handleContributedBy} value={contributedBy}/>
            <hr />
            
            <button>Add Beer</button>





        </form>



        )
}

export default AddBeerPage;
