import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { TdeeContext } from "../context/Context";

export const Navbar = () => {
  const tdee = useContext(TdeeContext);

  const navigate = useNavigate();
  return (
    <div className="navbar-ctn">
      <div
        className="nav-item"
        onClick={() => {
          navigate("/");
          tdee.setColoricon("white");
        }}
      >
        <i className="fa-solid fa-house iconnav"></i>
        <div className="food-text">Home</div>
      </div>
      <div className="wall"></div>
      <div
        className="nav-item"
        onClick={() => {
          navigate("/tdee");
          tdee.setColoricon("white");
        }}
      >
        <i className="fa-solid fa-dumbbell iconnav"></i>

        <div className="food-text">TDEE</div>
      </div>
      <div className="wall"></div>

      <div
        className="nav-item"
        onClick={() => {
          navigate("/calo");
          tdee.setColoricon("black");
        }}
      >
        <i class="fa-solid fa-bowl-food iconnav"></i>

        <div className="food-text">Calo</div>
      </div>
      <div className="wall"></div>

      <div
        className="nav-item"
        onClick={() => {
          navigate("/weather");
          tdee.setColoricon("white");
        }}
      >
        <i className="fa-solid fa-cloud iconnav"></i>

        <div className="food-text">Weather</div>
      </div>
    </div>
  );
};
