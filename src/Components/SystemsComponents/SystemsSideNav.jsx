import React, { useState } from "react";
import SystemsSubNav from "./SystemsSubNav";

const SystemsSideNav = ({sidebarData,subMenuList,setSubmenuList}) => {

  const [isShow, setIsshow] = useState(false)
    const handleClick = (sideBar, index) => {
      subMenuList === index ? setSubmenuList(null) : setSubmenuList(index)
        //isShow ? setIsshow(false) : setIsshow(true)
    }

  return (
    <>
      <div>
        <ul>
            {
                sidebarData.map((sideBar, index) => 
                <li onClick={() => handleClick(sideBar, index)} key={index}>
                    {sideBar.sideMenu}
                    {(subMenuList === index ) && (<SystemsSubNav subMenuList = {sidebarData[index].subSideMenus}/>)}
                </li>)
            }
        </ul>
      </div>
    </>
  );
};

export default SystemsSideNav;

