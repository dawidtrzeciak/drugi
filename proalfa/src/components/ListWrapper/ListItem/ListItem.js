import React from "react";
import "./ListItem.css";
import ActItem from "./ActItem/ActItem";

const ListItem = () => (
  <li className="listItem__wrapper">
    <h1 className="listItem__name">DzienTyg</h1>
   <ActItem />
   <ActItem />
   <ActItem />
  </li>
);

export default ListItem;
