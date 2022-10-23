import React from "react";
import "./Signup.css";
import { useContext } from "react";
import { TdeeContext } from "../context/Context";

export const Signup = () => {
  const tdee = useContext(TdeeContext);
  return (
    <div>
      <div className="signup-modal">
        <div
          className="signup-container"
          style={{ display: tdee.signupdisplay }}
          onKeyUp={(e) => {
            if (e.code === "Enter") {
              tdee.Signupbtn();
            }
          }}
        >
          <div className="text1" style={{ color: "#1b7870" }}>
            Sign-up Here
          </div>
          <div
            className="message"
            style={{ display: tdee.messagedisplay, color: tdee.messagecolor }}
          >
            {tdee.message}
          </div>
          <div className="signup-item">
            <input
              type="text"
              name=""
              id="email"
              className="signup-input"
              style={{
                borderBottom: "2px solid #2aefdd",
                marginTop: tdee.messagedisplay === "block" ? "20px" : "",
              }}
              value={tdee.emailsignupvalue}
              placeholder="Enter username here"
              onChange={tdee.handleEmailSignupValueChange}
            />
          </div>
          <div className="signup-item">
            <input
              type="password"
              name=""
              id="password"
              className="signup-input"
              value={tdee.passwordsignupvalue}
              style={{ borderBottom: "2px solid #2aefdd" }}
              placeholder="Enter password here"
              onChange={tdee.handlePasswordSignupValueChange}
            />
          </div>

          <div
            className="text2"
            style={{ backgroundColor: "#19dfe9f0" }}
            onClick={tdee.Signupbtn}
          >
            Sign-up
          </div>
          <div className="text3">Already have an account?</div>
          <div className="text4 text3">
            <a href="#" id="signinbtn" onClick={tdee.Signinsubbtn}>
              Sign-in
            </a>
            here
          </div>
        </div>
      </div>
    </div>
  );
};
