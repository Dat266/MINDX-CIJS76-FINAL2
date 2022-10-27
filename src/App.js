import axios from "axios";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Weather from "./components/Weather";
import { Home } from "./quy/components/Home";
import { Navbar } from "./quy/components/Navbar";
import { Tdee } from "./quy/components/Tdee";
import { Signin } from "./quy/components/Signin";
import { Signup } from "./quy/components/Signup";
import { useContext } from "react";
import { TdeeContext } from "./quy/context/Context";
import { Calo } from "./quy/components/Calo";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { Account } from "./quy/components/Account";
import { Oldservings } from "./quy/components/Oldservings";
function App() {
  const tdee = useContext(TdeeContext);
  const [city, setCity] = useState("");

  const hanldeMicro = async () => {
    const cityName = city.replace(/\s/g, "");

    const res = await axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ec36e374709a52512f4459ac354307d8`,
    });
  };
  const navigate = useNavigate();
  // start
  // function updatelogged() {
  //   const ac = localStorage.getItem("logged");
  //   if (ac) {
  //     if (ac === "true") {
  //       tdee.setLogged(true);
  //       // console.log("signindisplaynone");
  //       // tdee.setAccountname(ac.email);
  //       //
  //       var userlocal = localStorage.getItem("accurrent");
  //       tdee.setAccountname(userlocal);
  //       tdee.setColoricon("white");
  //       // console.log(userlocal);
  //       //
  //       tdee.setSignindisplay("none");
  //     } else {
  //       tdee.setLogged(false);
  //     }
  //   }
  // }
  // updatelogged();
  // end
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
