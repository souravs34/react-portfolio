import React from "react";

const MenuItems = ({ menuItems }) => {
  return (
    <div className="projects">
      {menuItems.map((item) => {
        return (
          <div className="project" key={item.id}>
            <div className="image--data">
              <img src={item.image} alt="" />
              <ul className="hover--items">
                <li>
                  <a href={item.link1}>{item.icon1}</a>
                  <a href={item.link2}>{item.icon2}</a>
                </li>
              </ul>
            </div>
            <h5>{item.title}</h5>
            <p>Placeholder Paragraph</p>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
