import React from "react";
import "./Fooditem.css";
export const Fooditem = ({ path, text, protein, carb, fat, calo }) => {
  return (
    <div className="fooditem-ctn">
      <div>
        <img className="food-img" src={require(`../img/${path}`)} alt="" />
      </div>
      <div className="fooditem-calo">Calo: {calo} calo</div>
      <div className="fooditem-text">{text}</div>
      <div className="fooditem-protein">Protein: {protein}g</div>
      <div className="fooditem-carb">Tinh bột: {carb}g</div>
      <div className="fooditem-fat">Chất béo: {fat}g</div>
    </div>
  );
};
