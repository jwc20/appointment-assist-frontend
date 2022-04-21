import React from "react";

function Logo() {
  return (
    <div className="logo-container">
      <img src={require("./logo.png")} alt="logo image" />
    </div>
  );
}

export default Logo;
