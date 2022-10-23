import React, { useState } from "react";
import "./Fooditem.css";
export const Fooditem = ({
  path,
  text,
  protein,
  carb,
  fat,
  calo,
  calocurrent,
  setCalocurrent,
  proteintotal,
  carbtotal,
  fattotal,
  setProteintotal,
  setCarbtotal,
  setFattotal,
  carbpercent,
  setCarbpercent,
  fatpercent,
  setFatpercent,
  proteinpercent,
  setProteinpercent,
  setDatachart,
}) => {
  const setcalo = (path, text, protein, carb, fat, calo) => {
    setCalocurrent((calocurrent += Number((inputfooditem / 100) * calo)));
    setProteintotal((proteintotal += Number((inputfooditem / 100) * protein)));
    setCarbtotal((carbtotal += Number((inputfooditem / 100) * carb)));
    setFattotal((fattotal += Number((inputfooditem / 100) * fat)));

    // setCarbpercent((carbtotal / (proteintotal + carbtotal + fattotal)) * 100);
    // setFatpercent((fattotal / (proteintotal + carbtotal + fattotal)) * 100);

    // setProteinpercent(
    //   (proteintotal / (proteintotal + carbtotal + fattotal)) * 100
    // );

    setDatachart({
      datasets: [
        {
          data: [
            (proteintotal / (proteintotal + carbtotal + fattotal)) * 100,
            (carbtotal / (proteintotal + carbtotal + fattotal)) * 100,
            (fattotal / (proteintotal + carbtotal + fattotal)) * 100,
          ],
          backgroundColor: ["#ff0000b5", "#d1ff00b5", "#00fffab5"],
          borderColor: "transparent",
        },
      ],

      labels: ["Protein", "Tinh Bột", "Chất Béo"],
    });
    // console.log(proteintotal, carbtotal, fattotal);
    // console.log(proteinpercent, carbpercent, fatpercent);
    // console.log((proteintotal / (proteintotal + carbtotal + fattotal)) * 100);
  };
  const [inputfooditem, setInputfooditem] = useState(100);
  const handleInputfooditem = (e) => {
    setInputfooditem(e.target.value);
  };
  // parseFloat(tdee.bmi.toFixed(1))
  return (
    <div className="fooditem-ctn">
      <div>
        <img className="food-img" src={require(`../img/${path}`)} alt="" />
      </div>
      <div className="fooditem-calo">
        Calo: {((inputfooditem / 100) * calo).toFixed(1)} calo
      </div>
      <div className="fooditem-text">{text}</div>
      <div className="fooditem-protein">
        Protein: {((inputfooditem / 100) * protein).toFixed(1)}g
      </div>
      <div className="fooditem-carb">
        Tinh bột: {((inputfooditem / 100) * carb).toFixed(1)}g
      </div>
      <div className="fooditem-fat">
        Chất béo: {((inputfooditem / 100) * fat).toFixed(1)}g
      </div>
      <input
        className="fooditem-input"
        type="number"
        onChange={handleInputfooditem}
        value={inputfooditem}
      />
      <button
        className="fooditem-button"
        onClick={() => {
          setcalo(path, text, protein, carb, fat, calo);
        }}
      >
        +
      </button>
    </div>
  );
};
