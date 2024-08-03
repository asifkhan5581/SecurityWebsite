import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import "./Counter.css";
function Counter() {
  const [countOn, setcountOn] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setcountOn(true)}
        onExit={() => setcountOn(false)}
      >
        <div className="counter">
          <div className="counter-contant">
            <h1>
              {countOn && (
                <CountUp start={0} end={300} delay={0} duration={2}></CountUp>
              )}
            </h1>
            <h3>Project Done</h3>
          </div>
          <div className="counter-contant">
            <h1>
              {countOn && (
                <CountUp start={0} end={280} delay={0} duration={2}></CountUp>
              )}
            </h1>
            <h3>Happy Customer</h3>
          </div>
          <div className="counter-contant">
            <h1>
              {countOn && (
                <CountUp start={0} end={500} delay={0} duration={2}></CountUp>
              )}
            </h1>
            <h3>Our Employes</h3>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
}

export default Counter;
