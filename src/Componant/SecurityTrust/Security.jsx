import React from "react";
import "./Security.css";

function Security(props) {
  return (
    <>
      <div className="security">
        <div className="security-image">
          <img src={props.image} alt="" />
        </div>
        <div className="security-contant">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <hr className="border border-black border-3 opacity-100" />
        </div>
      </div>
    </>
  );
}

export default Security;
