import React from "react";
import "./Signin.css";
import { useContext } from "react";
import { TdeeContext } from "../context/Context";
export const Signin = () => {
  const tdee = useContext(TdeeContext);
  return (
    <div>
      <div className="signin-modal">
        <div
          className="signin-container"
          style={{ display: tdee.signindisplay }}
          onKeyUp={(e) => {
            if (e.code === "Enter") {
              tdee.Signinbtn();
            }
          }}
        >
          <div className="text1">Sign-in Here</div>
          <div
            className="message"
            style={{ display: tdee.messagedisplay, color: tdee.messagecolor }}
          >
            {/* Invalid username/password combination */}
            {tdee.message}
          </div>
          <div className="signin-item">
            <input
              type="text"
              name=""
              id="email1"
              className="signin-input"
              placeholder="Enter username here"
              onChange={tdee.handleEmailSigninValueChange}
              style={{
                marginTop: tdee.messagedisplay === "block" ? "20px" : "",
              }}
            />
          </div>
          <div className="signin-item">
            <input
              type="password"
              name=""
              id="password1"
              className="signin-input"
              placeholder="Enter password here"
              onChange={tdee.handlePasswordSigninValueChange}
            />
          </div>

          <div className="text2" onClick={tdee.Signinbtn}>
            Sign-in
          </div>
          <div className="text3">Don't have an account?</div>
          <div className="text4 text3">
            <a href="#" id="signupbtn" onClick={tdee.Signupsubbtn}>
              Sign-up
            </a>
            here
          </div>
        </div>
      </div>
    </div>
  );
};
