import axios from "axios";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./auth/login";
import Register from "./auth/register";
import Header from "./components/Layout/Header";

function App() {
  const [city, setCity] = useState("");

  const hanldeMicro = async () => {
    const cityName = city.replace(/\s/g, "");

    const res = await axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ec36e374709a52512f4459ac354307d8`,
    });
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
