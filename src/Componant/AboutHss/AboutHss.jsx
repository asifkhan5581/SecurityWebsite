import React from "react";
import "./AboutHss.css";
import image from "../../images/Aboutman.jpg";
import Counter from "../Counter/Counter";
function AboutHss() {
  return (
    <>
      <div className="about-hss">
        <div class="container">
          <div class="row">
            <div class="col-sm-8">
              <div className="about-contant">
                <h1>About HSS</h1>
                <p>
                  Our Company is creating a difference in the community By
                  understanding the need of security services. we strive to make
                  our services economical to everyone.
                </p>
                <p>
                  at Hashir Security Services (HSS), we understand with a newer
                  generation, there is complications that we must face head-on
                  with confidence. We are built on trust and integrity with the
                  mindset of treating clients and employees with the highest
                  level of honesty and professionalism.
                </p>
                <div className="count">
                  <Counter></Counter>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div className="about-image">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHss;
