import "./Header.css"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

const Header=()=>{
    return(
        <div className="Header"> 
            <Link to={'/'} > <img src={logo} alt="" /> </Link>                       
        </div>
    );
}

export default Header;