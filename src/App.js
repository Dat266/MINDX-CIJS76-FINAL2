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

  useEffect(() => {
    navigate("/");
  }, [tdee.logged]);

  return (
    <div className="App">
      {/* <Header /> */}
      {tdee.logged && <Navbar />}
      <Signin />
      <Signup />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tdee" element={<Tdee />} />
        <Route path="/calo" element={<Calo />} />
        <Route path="/weather" element={<Weather />} />
        {/* <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} /> */}
      </Routes>
    </div>
  );
}

export default App;
