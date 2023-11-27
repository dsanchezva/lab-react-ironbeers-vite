import { Link } from "react-router-dom";
import  logo from "../assets/home-icon.png"
function Navbar() {

    return (
        <nav>
            <Link to="/"><img src={logo} alt="home logo" width={60}/></Link>
        </nav>
    )
}

export default Navbar;
