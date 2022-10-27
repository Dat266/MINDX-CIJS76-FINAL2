import React from "react";
import "./Oldservings.css";
import { useContext, useEffect, useState } from "react";
import { TdeeContext } from "../context/Context";

export const Oldservings = () => {
  const tdee = useContext(TdeeContext);
  const [servingslocal, setServingslocal] = useState([]);

  useEffect(() => {
    const listlocal = JSON.parse(
      localStorage.getItem(`${tdee.accountname}list`)
    );
    if (listlocal) {
      setServingslocal(listlocal);
      console.log(listlocal);
    }
  }, []);
  return (
    <div className="oldservings-ctn">
      <div className="oldservings">
        <div className="servings-title">Thực Đơn Đã Lưu</div>
        <div>
          {servingslocal.length !== 0 &&
            servingslocal.map((item) => (
              <div className="fooditem-ctn" key={item.id}>
                <div>
                  <img
                    className="food-img"
                    src={require(`../img/${item.path}`)}
                    alt=""
                  />
                </div>

                <div className="fooditem-calo">
                  Khối Lượng: {item.inputfooditem} g
                </div>

                <div className="fooditem-text">{item.text}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
