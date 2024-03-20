import React, { useState } from "react";
import SystemsSideNav from "./SystemsSideNav";

const Systems = () => {
  const sidebarData = [
    {
      sideMenu: "Main Nav 1",
      subSideMenus: [
        {
          title: "Sub Nav 1-1",
          image: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"],
        },
        {
          title: "Sub Nav 1-2",
          image: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"],
        },
        {
          title: "Sub Nav 1-3",
          image: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"],
        },
        {
          title: "Sub Nav 1-4",
          image: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"],
        },
      ],
    },
    {
      sideMenu: "Main Nav 2",
      subSideMenus: [
        {
          title: "rgjoir",
        },
        {
          title: "rergjoir",
        },
      ],
      image: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"],
    },
    {
      sideMenu: "Main Nav 3",
      subSideMenus: [],
      image: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"],
    },
    {
      sideMenu: "Main Nav 4",
      subSideMenus: [],
      image: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"],
    },
    {
      sideMenu: "Main Nav 5",
      subSideMenus: [],
      image: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"],
    },
    {
      sideMenu: "Main Nav 6",
      subSideMenus: [],
      image: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"],
    },
    {
      sideMenu: "Main Nav 7",
      subSideMenus: [],
      image: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"],
    },
  ];
  const [subMenuList, setSubmenuList] = useState([])

  return (
    <>
      <div className="row">
        <div className="col-md-5">
          <SystemsSideNav sidebarData={sidebarData} subMenuList={subMenuList} setSubmenuList={setSubmenuList} />
        </div>
        <div className="col-md-7"></div>
      </div>
    </>
  );
};

export default Systems;