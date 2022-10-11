import React from "react";

const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      id="form3Example4"
      className="form-control form-control-lg"
      placeholder={placeholder}
      required
    />
  );
};

export default Input;
