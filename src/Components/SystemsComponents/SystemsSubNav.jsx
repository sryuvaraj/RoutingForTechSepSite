import React from "react";

const SystemsSubNav = ({subMenuList}) => {
    console.log(subMenuList)
  return (
    <>
      <div>
        <ul>
            {
                subMenuList.map((submenu, index) => <li key={submenu.title}>{submenu.title}</li>)
            }
        </ul>
      </div>
    </>
  );
};

export default SystemsSubNav;
