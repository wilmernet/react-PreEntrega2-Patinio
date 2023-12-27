import React from 'react';
import "./NavBar.css";
import {Link} from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import CategoryButton from '../CategoryButton/CategoryButton';

const NavBar = () => {
  return (
    <nav className="NavBar">
        <ul>
            <Link to={"/"} className="button">Home</Link>
            <Link to={"/about"} className="button">Contacto</Link>
            <Link to={"/"} ><CategoryButton/></Link>            
        </ul>
        <div id="cartWidget">
           <CartWidget/>
        </div>
    </nav>
  )
}

export default NavBar