import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar-ctn">
      <div
        className="nav-item"
        onClick={() => {
          navigate("/");
        }}
      >
        <i class="fa-solid fa-house iconnav"></i>
        <div className="food-text">Home</div>
      </div>
      <div className="wall"></div>
      <div
        className="nav-item"
        onClick={() => {
          navigate("/tdee");
        }}
      >
        <i class="fa-solid fa-dumbbell iconnav"></i>

        <div className="food-text">TDEE</div>
      </div>
      <div className="wall"></div>

      <div className="nav-item">
        <i class="fa-solid fa-bowl-food iconnav"></i>

        <div className="food-text">Calo</div>
      </div>
      <div className="wall"></div>

      <div className="nav-item">
        <i class="fa-solid fa-cloud iconnav"></i>

        <div className="food-text">Weather</div>
      </div>
    </div>
  );
};
