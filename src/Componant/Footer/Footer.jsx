import React from "react";
import Logo from "../../images/Logo.png";
import "./footer.css";
function Footer() {
  const footerContant =
    "our company is creating a difference in the community By understanding the need of We provide security guard services in GTHA,  Hamilton, Stoney Creek, St Catherines,Burlington, Simcoe, Brantford, London,  Mississauga, Oakville, Grimsby, and  any neighboring cities. ";
  const footerHeading = "Hashir Security Services - HSS";
  const facebook = <i class="fa-brands fa-facebook"></i>;
  const twitter = <i class="fa-brands fa-square-twitter"></i>;
  const instagram = <i class="fa-brands fa-instagram"></i>;
  const youtube = <i class="fa-brands fa-youtube"></i>;
  const listData = [
    "Hourly Patrols",
    "Building Patrols",
    "Wedding Security Services",
    "Access Control",
    "Abandoned buildings/Warehouses Patrols",
    "Stationary Security Guards",
    "24/7 Security Services",
    "Front Desk Duties",
    "Retail Stores",
    "Firewatch",
    "Special/Private/Corporate Event Security",
  ];
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="footer-contant">
                <img src={Logo} alt="" />
                <h3>{footerHeading}</h3>
                <p>{footerContant}</p>
                <span className="fac">{facebook}</span>
                <span className="yout">{youtube}</span>
                <span className="inst">{instagram}</span>
                <span className="tiw">{twitter}</span>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="list-data">
                <h3>Here's a list of services we provide.</h3>
                {listData.map((item) => {
                  return (
                    <ul>
                      <li>{item}</li>
                    </ul>
                  );
                })}
              </div>
            </div>
            <div className="col-sm-3">
              <div className="footer-about">
                <h3>Get in Tourch</h3>
                <p>
                  <i class="fa-regular fa-envelope"></i>{" "}
                  info@hashirsecurityservices.ca
                </p>
                <p>
                  <i class="fa-solid fa-square-phone"></i> 289-489-4336
                </p>
                <p>
                  <i class="fa-solid fa-location-dot"></i> Located in Hamilton,
                  ON
                </p>
                <p>
                  <i class="fa-solid fa-clock"></i> Open today :09:00 a.m. –
                  06:00 p.m.
                </p>
                <p className="footer-para">
                  Receive a Free Security Guard Services Quote by WhatsApp:
                </p>
                <div className="footer-button">
                  <button>Message Us on Whatsapp</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
