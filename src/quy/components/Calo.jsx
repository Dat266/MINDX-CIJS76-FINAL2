import React from "react";
import "./Calo.css";
import { useState } from "react";
import { Fooditem } from "./Fooditem";

export const Calo = () => {
  const menu = [
    {
      path: "ucgasong.jpg",
      text: "Ức Gà ( Sống )",
      protein: "31",
      carb: "0",
      fat: "4",
      calo: "165",
    },
    {
      path: "duigasong.jpg",
      text: "Đùi Gà ( Sống )",
      protein: "19",
      carb: "0",
      fat: "9",
      calo: "161",
    },
    {
      path: "cacao.jpg",
      text: "Bột Cacao",
      protein: "20",
      carb: "20",
      fat: "10",
      calo: "240",
    },
    {
      path: "cua.jpg",
      text: "Thịt Cua",
      protein: "19",
      carb: "0",
      fat: "2",
      calo: "97",
    },
    {
      path: "duachuot1.PNG",
      text: "Dưa Chuột",
      protein: "1",
      carb: "4",
      fat: "0",
      calo: "15",
    },
    {
      path: "cucai.PNG",
      text: "Củ cải",
      protein: "1",
      carb: "4",
      fat: "0",
      calo: "18",
    },
    {
      path: "trung.PNG",
      text: "Trứng",
      protein: "13",
      carb: "1",
      fat: "10",
      calo: "143",
    },
    {
      path: "cavien.PNG",
      text: "Cá Viên",
      protein: "19",
      carb: "4",
      fat: "14",
      calo: "221",
    },
    {
      path: "nuocmam.PNG",
      text: "Nước Mắm",
      protein: "5",
      carb: "4",
      fat: "0",
      calo: "35",
    },
    {
      path: "ucgaran.PNG",
      text: "Ức Gà ( Rán )",
      protein: "25",
      carb: "9",
      fat: "13",
      calo: "260",
    },
    {
      path: "duigaran.PNG",
      text: "Đùi Gà ( Rán )",
      protein: "27",
      carb: "2",
      fat: "14",
      calo: "245",
    },
    {
      path: "dautay.PNG",
      text: "Dâu Tây",
      protein: "1",
      carb: "9",
      fat: "0",
      calo: "36",
    },
    {
      path: "toi.PNG",
      text: "Tỏi",
      protein: "6",
      carb: "33",
      fat: "0",
      calo: "149",
    },
    {
      path: "gung.PNG",
      text: "Gừng",
      protein: "0",
      carb: "80",
      fat: "0",
      calo: "300",
    },
    {
      path: "nuocdua.PNG",
      text: "Nước Dừa",
      protein: "0",
      carb: "16",
      fat: "1",
      calo: "71",
    },
    {
      path: "longtrangtrung.PNG",
      text: "Lòng Trắng Trứng",
      protein: "11",
      carb: "0",
      fat: "0",
      calo: "52",
    },
    {
      path: "longdotrung.PNG",
      text: "Lòng Đỏ Trứng",
      protein: "14",
      carb: "1",
      fat: "30",
      calo: "327",
    },
    {
      path: "buoi.PNG",
      text: "Bưởi",
      protein: "0.2",
      carb: "7.3",
      fat: "0",
      calo: "30",
    },
    {
      path: "cam.PNG",
      text: "Cam",
      protein: "0.9",
      carb: "8.4",
      fat: "30",
      calo: "37",
    },
    {
      path: "chanh.PNG",
      text: "Chanh",
      protein: "0.9",
      carb: "4.8",
      fat: "30",
      calo: "23",
    },
    {
      path: "chuoitay.PNG",
      text: "Chuối",
      protein: "0.9",
      carb: "15",
      fat: "0.3",
      calo: "66",
    },
    {
      path: "dudu.PNG",
      text: "Đu Đủ",
      protein: "1",
      carb: "7.7",
      fat: "0",
      calo: "35",
    },
    {
      path: "duahau.PNG",
      text: "Dưa Hấu",
      protein: "1.2",
      carb: "2.3",
      fat: "0.2",
      calo: "16",
    },
    {
      path: "thitbo.PNG",
      text: "Thịt Bò",
      protein: "21",
      carb: "0",
      fat: "3.8",
      calo: "118",
    },
    {
      path: "thitbokho.PNG",
      text: "Thịt Bò Khô",
      protein: "51",
      carb: "5.2",
      fat: "1.6",
      calo: "239",
    },
    {
      path: "thitlonbachi.PNG",
      text: "Thịt Heo Ba Chỉ",
      protein: "16.5",
      carb: "0",
      fat: "21.5",
      calo: "260",
    },
    {
      path: "thitlonnac.PNG",
      text: "Thịt Heo Nạc",
      protein: "19",
      carb: "0",
      fat: "7",
      calo: "139",
    },
    {
      path: "cachep.PNG",
      text: "Cá Chép",
      protein: "16",
      carb: "0",
      fat: "3.6",
      calo: "96",
    },
    {
      path: "cahoi.PNG",
      text: "Cá Hồi",
      protein: "22",
      carb: "0",
      fat: "5.3",
      calo: "136",
    },
    {
      path: "cangu.PNG",
      text: "Cá Ngừ",
      protein: "21",
      carb: "0",
      fat: "0.3",
      calo: "87",
    },
    {
      path: "carophi.PNG",
      text: "Cá Rô Phi",
      protein: "19.7",
      carb: "0",
      fat: "2.3",
      calo: "100",
    },
    {
      path: "luon.PNG",
      text: "Thịt Lươn",
      protein: "20",
      carb: "0",
      fat: "1.5",
      calo: "99",
    },
    {
      path: "ocbuou.PNG",
      text: "Ốc Bươu",
      protein: "11",
      carb: "8.3",
      fat: "0.7",
      calo: "84",
    },
    {
      path: "so.PNG",
      text: "Sò",
      protein: "8.8",
      carb: "3",
      fat: "0.4",
      calo: "51",
    },
    {
      path: "tom.PNG",
      text: "Tôm Biển",
      protein: "17.6",
      carb: "0.9",
      fat: "0.9",
      calo: "82",
    },
    {
      path: "matong.PNG",
      text: "Mật Ong",
      protein: "0.4",
      carb: "81.3",
      fat: "0",
      calo: "327",
    },
    {
      path: "cocacola.PNG",
      text: "Cocacola",
      protein: "0",
      carb: "10.4",
      fat: "0",
      calo: "42",
    },
    {
      path: "bia.PNG",
      text: "Bia",
      protein: "1.6",
      carb: "9",
      fat: "0",
      calo: "43",
    },
  ];
  const [searchfood, setSearchfood] = useState("");
  const handleSearchfoodChange = (e) => {
    setSearchfood(e.target.value);
  };
  return (
    <div className="calo-ctn">
      <div className="calo-menu">
        <div className="calo-menu-title">BẢNG TÍNH CALO THEO 100G</div>

        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Enter food's name here"
            value={searchfood}
            onChange={handleSearchfoodChange}
          />
        </div>
        {menu
          .filter((item) => {
            return item.text.indexOf(searchfood.trim()) !== -1;
          })
          .map((item) => (
            <Fooditem
              key={item.path + item.text}
              path={item.path}
              text={item.text}
              protein={item.protein}
              carb={item.carb}
              fat={item.fat}
              calo={item.calo}
            />
          ))}
      </div>
    </div>
  );
};
