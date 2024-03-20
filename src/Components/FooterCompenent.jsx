import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const FooterCompenent = ({isHome,setIsHome}) => {

  return (
    <>
      <div>
      <div className="row py-4" style={{backgroundColor:"rgb(28, 70, 108)", color:"white"}}>
        <div className="col-md-4" style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
        {
            isHome ? (<div className="col-md-4" style={{display:"flex", justifyContent:"center"}}>
            <img src="https://techsepengg.com/slider-2.jpg" width={200} alt="locatingImg" />
          </div>):(
            <div>
            <ul>
            <li style={{listStyle:"none"}}><Link style={{textDecoration:"none", color:"white"}} onClick={() => setIsHome(false)} to="/about">About Us</Link></li>
            <li style={{listStyle:"none"}}><Link style={{textDecoration:"none", color:"white"}} onClick={() => setIsHome(false)} to="/systems">Systems</Link></li>
            <li style={{listStyle:"none"}}><Link style={{textDecoration:"none", color:"white"}} onClick={() => setIsHome(false)} to="/projects">Projects</Link></li>
            <li style={{listStyle:"none"}}><Link style={{textDecoration:"none", color:"white"}} onClick={() => setIsHome(false)} to="/quality">Quality</Link></li>
            <li style={{listStyle:"none"}}><Link style={{textDecoration:"none", color:"white"}} onClick={() => setIsHome(false)} to="/enquiry">Enquiry</Link></li>
            <li style={{listStyle:"none"}}><Link style={{textDecoration:"none", color:"white"}} onClick={() => setIsHome(false)} to="/careers">Careers</Link></li>
          </ul>
            </div>
          )
          }
        </div>
          <div className="col-md-4" style={{display:"flex", alignItems:"center"}}>
            <div className=" px-5" style={{display:"flex", justifyContent:"center"}}><MdLocationPin size={40} /></div>
            <div>
              <h4>Singapore</h4><br/>
              <p>TechSep Process Engineering Pte Ltd</p>
              <p>#09-37 Primz BizHub, 21 Woodlands Close</p>
              <p>Singapore - 737 854</p>
              <p><FaPhone /> +65 6265 7215</p>
            </div>
          </div>
          <div className="col-md-4" style={{display:"flex", alignItems:"center"}}>
          <div className=" px-5" style={{display:"flex", justifyContent:"center"}}><MdLocationPin size={40} /></div>
            <div>
              <h4>India</h4><br/>
              <p>TechSep Process Engineering</p>
              <p>No.308, Somangalam Road</p>
              <p>Melathur, Sriperumbudur Taluk</p>
              <p>Chennai - 600 069, Tamilnadu, India</p>
              <p><FaPhone /> +91 44 26810358</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterCompenent;
