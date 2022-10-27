import { Route, Routes } from "react-router-dom";

import { useContext, useEffect } from "react";
import "./App.css";
import Weather from "./components/Weather";
import { Calo } from "./quy/components/Calo";
import { Home } from "./quy/components/Home";
import { Navbar } from "./quy/components/Navbar";
import { Signin } from "./quy/components/Signin";
import { Signup } from "./quy/components/Signup";
import { Tdee } from "./quy/components/Tdee";
import { TdeeContext } from "./quy/context/Context";

import { useNavigate } from "react-router";

import { Account } from "./quy/components/Account";
import { Oldservings } from "./quy/components/Oldservings";

function App() {
  const tdee = useContext(TdeeContext);

  const navigate = useNavigate();

  useEffect(() => {
    const ac = localStorage.getItem("logged");
    if (ac) {
      if (ac === "true") {
        tdee.setLogged(true);

        var userlocal = localStorage.getItem("accurrent");
        tdee.setAccountname(userlocal);
        tdee.setColoricon("white");

        tdee.setSignindisplay("none");
      } else {
        tdee.setLogged(false);
      }
    }
  }, [tdee.logged]);
  //
  useEffect(() => {
    navigate("/");
  }, [tdee.logged]);

  return (
    <div className="App">
      {/* <Header /> */}
      {tdee.logged && <Navbar />}
      {tdee.logged && <Account />}
      <Signin />
      <Signup />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tdee" element={<Tdee />} />
        <Route path="/calo" element={<Calo />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/oldservings" element={<Oldservings />} />
        {/* <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} /> */}
      </Routes>
    </div>
  );
}

export default App;
