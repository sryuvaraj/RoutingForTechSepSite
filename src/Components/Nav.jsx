import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../Css/Nav.css'

const Nav = ({isHome,setIsHome}) => {

    const linkStyle = {
        textDecoration:"none",
        color:"rgb(28, 70, 108)",
        listStyleType:"none",
        fontSize:"18px",
        fontWeight:"600"
    }
    
  return (
    <>
      <div className="row py-3">
        <div className="col-md-3 text-center">
            <img style={{width:150}} src="http://techsepengg.com/logo.png" alt="logo" />
        </div>
        <div className="col-md-8" >
          <ul style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
            <li style={{listStyle:"none"}}><Link exact activeStyle={{color:"red"}} style={linkStyle} onClick={() => setIsHome(true)} to="/">Home</Link></li>
            <li style={{listStyle:"none"}}><NavLink exact activeStyle={{color:"red"}}  style={linkStyle} onClick={() => setIsHome(false)} to="/about">About Us</NavLink></li>
            <li style={{listStyle:"none"}}><Link style={linkStyle} onClick={() => setIsHome(false)} to="/projects">Projects</Link></li>
            <li style={{listStyle:"none"}}><Link style={linkStyle} onClick={() => setIsHome(false)} to="/quality">Quality</Link></li>
            <li style={{listStyle:"none"}}><Link style={linkStyle} onClick={() => setIsHome(false)} to="/enquiry">Enquiry</Link></li>
            <li style={{listStyle:"none"}}><Link style={linkStyle} onClick={() => setIsHome(false)} to="/careers">Careers</Link></li>
          </ul>
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  );
};

export default Nav;
