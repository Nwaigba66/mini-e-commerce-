import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/ecommerce-logo.png";
import image from "../assets/cart-logo.png";


const NavBar = () => {
  const [activeTab, setActiveTab ] = useState("");
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setsignupModal] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleLoginModal = () => {
    setLoginModal(!setLoginModal);
  };

  const togglesignupModal = () => {
    setsignupModal(!setsignupModal);
  };

  const toggleModal = () => {
    setLoginModal(false);
    setsignupModal(false);
  };

  return (
    <>    
    <div className='nav-bar'>
   
      <img src={logo} className="site-logo" alt="site-logo" />
      <input type="search" className="search-bar" 
      placeholder="Search products, guides and more"></input>

      <h2 className="header-title">E-commerce App</h2>

       <button className="button-logout" onClick="clicked">LogIn</button>
      <button className="button-login" onClick="clicked">LogOut</button> 
       
      <img src={image} className="cart-logo" alt="logo"/>     
    </div>
    </>
  )
}

export default NavBar;



