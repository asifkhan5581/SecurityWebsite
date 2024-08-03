import React, { useEffect, useState } from "react";
import "./hero.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Hero() {
  const [scrollpage, setscrollpage] = useState(false);
  const [color, setcolor] = useState("");
  useEffect(() => {
    setInterval(() => {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      setcolor(randomColor);
    }, 3000);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
    function handlescroll() {
      if (window.scrollY > 100) {
        setscrollpage(true);
      } else {
        setscrollpage(false);
      }
    }
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="hero">
        <div className="hero-contant" data-aos="fade-left">
          <h3 style={{ color }}>
            THE MOST SUCCESSFUL <br /> SECURITY AGENCY
          </h3>
          <div className="btn" data-aos="fade-up">
            <button type="submit" style={{ border: `3px solid ${color}` }}>
              Learn More about our Services
            </button>
          </div>
          {scrollpage && (
            <span onClick={scrollTop}>
              <i class="fa-solid fa-arrow-up"></i>
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default Hero;
