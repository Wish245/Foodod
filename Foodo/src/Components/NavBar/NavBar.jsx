import React, {useState} from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom';

const NavBar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("home");
  return (
    <div className='navBar'>
        <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link>
        <ul className="navbar-menu">
  <li>
    <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
      Home
    </Link>
  </li>
  <li>
    <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>
      Menu
    </a>
  </li>
  <li>
    <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>
      Mobile App
    </a>
  </li>
  <li>
    <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>
      Contact Us
    </a>
  </li>
</ul>

        <div className="navbar-right">
            <img src= {assets.search} alt="" className='navbar-search'/>
            <div className="navbar-search-icon">
                <Link to='/cart'><img src= {assets.shoppingBasket} alt=""  className='navbar-search'/></Link>
                <div className="dot"></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
    </div>
  )
}

export default NavBar