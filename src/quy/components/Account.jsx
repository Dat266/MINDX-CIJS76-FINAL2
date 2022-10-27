import React from "react";
import "./Account.css";
import { useContext } from "react";
import { TdeeContext } from "../context/Context";
import { useNavigate } from "react-router";

export const Account = () => {
  const tdee = useContext(TdeeContext);
  const navigate = useNavigate();

  const logoutbtn = () => {
    tdee.setLogged(false);
    navigate("/");
    tdee.setSignindisplay("block");
    localStorage.setItem("logged", false);
  };
  console.log(tdee.logged);

  // console.log(tdee.logged);
  return (
    <div className="account-ctn" style={{ color: tdee.coloricon }}>
      <div>
        Xin chào {tdee.accountname}
        <i class="fa-solid fa-user account-icon">
          <i class="fa-solid fa-sort-down"></i>
          <div className="account-options">
            <div
              style={{
                marginLeft: "7px",
                borderBottom: "1px solid #ccc",
                paddingBottom: "10px",
              }}
              onClick={() => {
                navigate("/oldservings");
                tdee.setColoricon("black");
              }}
            >
              Thực Đơn Đã Lưu
            </div>
            <div
              style={{ marginLeft: "7px", marginTop: "-5px" }}
              onClick={logoutbtn}
            >
              Đăng Xuất
            </div>
          </div>
        </i>
      </div>
    </div>
  );
};
