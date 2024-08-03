import React from "react";
import "./services.css";
import AOS from "aos";
function Services(props) {
  return (
    <>
      <div className="services">
        <div className="services-contant">
          <div className="service-icon">
            <img src={props.image} alt="" />
          </div>
          <div className="service-para">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
