import React from "react";
import { Link, Outlet } from "react-router-dom";

const SideBarProj = () => {
  const linkStyle= {
    textDecoration:"none",
    color:"black",
    fontSize:"21px",
  }
  return (
    <>
      <div className="">
        <div className="">
          <ul>
            <li className="p-2">
              <Link to="/projects/skid" style={linkStyle}>Skid Packages</Link>
            </li>
            <li className="p-2">
              <Link to="/projects/pressure" style={linkStyle}>
                Pressure Vessels / Heat Exchangers
              </Link>
            </li>
            <li className="p-2">
              <Link to="/projects/hpcu" style={linkStyle}>HPCU</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBarProj;
