import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const nameHeader = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Weather",
      path: "/weather",
    },
    {
      name: "Login",
      path: "/auth/login",
    },
    {
      name: "Register",
      path: "/auth/register",
    },
  ];

  const renderHeader = nameHeader.map((item, index) => {
    return (
      <li className="nav-item" key={index}>
        <Link className="nav-link " to={item.path}>
          {item.name}
        </Link>
      </li>
    );
  });

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary bg-gradient">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            React App
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">{renderHeader}</ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
