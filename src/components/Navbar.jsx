import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconBadge } from '../containers';
import brandLogo from "../assets/avavya-logo.png"

const Navbar = () => {
  return (
    <div className="navigation-top w-75">
    <header className="nav-bar left-aligned">
        <div className="brand-img children-middle">
            <img src={brandLogo} alt="avavya-logo"/>
        </div>
        <section className="nav-links flex">
            <NavLink to="/" className="nav-item paragraph2">
                Home
            </NavLink>
            <NavLink to="/Products" className="nav-item paragraph2 txt-gray">
                Shop
            </NavLink>
        </section>
        <section className="user-info children-middle">
            <div className="user-profile children-middle">                 
                <div className="dropdown flex children-middle">
                    <p className="user-name paragraph2 txt-gray"><strong>Guest &#9660;</strong></p>
                    <img className="avatar avatar-xxs" src="https://ik.imagekit.io/avavya/Avavya-Ecommerce/avatar-4_zs49NigR6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647588926179" alt="user-avatar"></img>
                    <div className="dropdown-content">
                        <NavLink to="/Login" className="user-name paragraph2 txt-gray">Login</NavLink>
                        <NavLink to="/Signup" className="user-name paragraph2 txt-gray">SignUp</NavLink>  
                    </div>
                </div>
            </div>
            <div className="wishlist">
                <IconBadge nextPath="/Wishlist" iconName="favorite_border" count="3" />
            </div>
            <div className="cart">
                <IconBadge nextPath="/Cart" iconName="shopping_cart" count="1"/>
            </div>  
        </section>
    </header>
    </div>
  )
}

export default Navbar;