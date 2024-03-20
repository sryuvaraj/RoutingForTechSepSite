import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <div style={{backgroundImage:'url("https://techsepengg.com/slider-2.jpg")',backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"80vh",display:"flex" ,justifyContent:"center",alignItems:"center"}}>
        <ul style={{}} className="text-white p-5">
          <li className="p-3 mx-5">
            <h5>TechSep Process Engineering comply with the ISO standards and
								follow a strict Quality
								Management
								Systems.</h5>
          </li>
          <li className="p-3 mx-5">
            <h5>We provide solutions to onshore and offshore, Petrochemical, Power
								Sector,
								Oil & Gas Industry, Refineries, Fertilizer, Pharmaceutical, Chemical, Water Treatment and others.</h5>
          </li>
          <li className="p-3 mx-5">
            <h5>TechSep Process Engineering established by a team of
								experienced
								professionals with few decades of rich experience in Oil and Gas process
								equipment;
								Regulating & Metering Skids; Purge & Condensate Systems; Chemical Dosing Skids; Hydraulic
								Control Units (HCU); Hydraulic Power Units (HPU).</h5>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
