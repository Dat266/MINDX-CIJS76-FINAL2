import axios from "axios";
import React, { useEffect, useState } from "react";
import { Micro, Search } from "../Resources/Icon";
import ListWeather from "./ListWeather";
import Vanta from "./Vanta";

const Weather = () => {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("hai phong");
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchApi() {
      const cityName = search?.replace(/\s/g, "");
      const res = await axios({
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ec36e374709a52512f4459ac354307d8&units=metric`,
      });

      setData(res.data);
    }
    fetchApi();
  }, [search]);

  const handleSearch = () => {
    console.log(data);
    setSearch(city);
    setCity("");
  };

  return (
    <div>
      <div className="vanta">
        <Vanta />
      </div>
      <div className="weather-main">
        <div className=" form-outline  pt-4  ">
          <input
            value={city}
            type="text"
            id="form3Example3"
            className="form-control form-control-lg"
            placeholder=" "
            required
            onChange={(e) => setCity(e.target.value)}
          />
          <label className="form-label" htmlFor="form3Example3">
            Search
          </label>
          <Search onclick={handleSearch} />
          <Micro />
        </div>
        <ListWeather data={data} />
      </div>
    </div>
  );
};

export default Weather;
