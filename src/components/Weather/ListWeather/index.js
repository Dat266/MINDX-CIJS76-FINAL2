import React from "react";

const ListWeather = ({ data }) => {
  const url = `http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`;
  return (
    <div className="list-weather">
      <h1>
        {data?.name}, {data?.sys?.country}
      </h1>
      <img src={url} style={{ marginRight: "1rem" }} />
      <h1>{Math.ceil(data?.main?.temp)}°C</h1>
      <p>Thời tiết: {data?.weather?.[0]?.main}</p>
      <p>Múi giờ: {data?.timezone}</p>
      <p>Mây: {data?.clouds?.all}%</p>
      <p>Kinh độ: {data?.main?.temp_min}°</p>
      <p>Vĩ độ: {data?.main?.temp_min}°</p>
      <p>
        Gió: {data?.wind?.speed} m/s - {data?.wind?.deg}°
      </p>
    </div>
  );
};

export default ListWeather;
