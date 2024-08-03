import React, { useEffect, useState } from "react";
import Logo from "../../images/logo.jpg";
import "./nav.css";
import { Link } from "react-router-dom";
function Nav() {
  const [menu, setmenu] = useState("home");
  const [showmedia, setshowmedia] = useState(false);
  const [stecky, setstecky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setstecky(true) : setstecky(false);
    });
  }, []);
  return (
    <>
      <div className={`main-navbar ${stecky ? "navbackground" : ""}`}>
        <nav>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          <ul
            className={showmedia ? "nav-links  mobile-menu-link" : "nav-links"}
          >
            <li>
              <Link to="/" onClick={() => setmenu("home")}>
                HOME
                {menu === "home" ? (
                  <hr
                    style={{ border: "3px solid orange", borderRadius: "10px" }}
                  />
                ) : (
                  <></>
                )}
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setmenu("about")}>
                ABOUT
                {menu === "about" ? (
                  <hr
                    style={{ border: "3px solid orange", borderRadius: "10px" }}
                  />
                ) : (
                  <></>
                )}
              </Link>
            </li>
            <li>
              <Link to="/service" onClick={() => setmenu("services")}>
                SERVICES
                {menu === "services" ? (
                  <hr
                    style={{ border: "3px solid orange", borderRadius: "10px" }}
                  />
                ) : (
                  <></>
                )}
              </Link>
            </li>
            <li>
              <Link to="/career" onClick={() => setmenu("careers")}>
                Careers
                {menu === "careers" ? (
                  <hr
                    style={{ border: "3px solid orange", borderRadius: "10px" }}
                  />
                ) : (
                  <></>
                )}
              </Link>
            </li>
            <li>
              <Link to="/opporunities" onClick={() => setmenu("opporunities")}>
                Co-Op Opporunities
                {menu === "opporunities" ? (
                  <hr
                    style={{ border: "3px solid orange", borderRadius: "10px" }}
                  />
                ) : (
                  <></>
                )}
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => setmenu("BLOGS")}>
                BLOGS
                {menu === "BLOGS" ? (
                  <hr
                    style={{ border: "3px solid orange", borderRadius: "10px" }}
                  />
                ) : (
                  <></>
                )}
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setmenu("CONTACT")}>
                CONTACT
                {menu === "CONTACT" ? (
                  <hr
                    style={{ border: "3px solid orange", borderRadius: "10px" }}
                  />
                ) : (
                  <></>
                )}
              </Link>
            </li>
          </ul>

          <div className="btn nav-btn">
            <button type="submit">
              <a href="#">
                <span>
                  <i class="fa-solid fa-phone"></i>
                </span>
                289-489-4336
              </a>
            </button>
          </div>
          <div className="menu-icon">
            <span onClick={() => setshowmedia(!showmedia)}>
              <i class="fa-solid fa-bars"></i>
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Nav;
