import React from "react";
import Services from "./Services";
import image1 from "../../images/building.png";
import image2 from "../../images/concert.png";
import image3 from "../../images/medical.png";
import image4 from "../../images/religious.png";
import image5 from "../../images/manicon.png";
import "./services.css";
var serviceContant =
  " HSS has been built around a well-structured system that trains all our Security Guards in site-specific training. Our Security Services are not only professional but with modern technology and a vast array of utilities, our services do not disappoint. We provide security guard services in GTHA, Hamilton, Stoney Creek, St Catherines, Burlington, Simcoe, Brantford, London, Mississauga,Oakville, Grimsby, and any neighboring cities.";

function ServicesData() {
  return (
    <>
      <div className="services-contant-data">
        <div className="service-heading">
          <h1>Services we offer</h1>
          <p>{serviceContant}</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <Services
                title="Retails, Office and Corporate"
                image={image1}
                desc="We provide Security Guard Services to retail stores, office buildings, and corporate locations."
              ></Services>
            </div>
            <div className="col-sm-4">
              <Services
                title="Retails, Office and Corporate"
                image={image2}
                desc="Having an upcoming Event or Large Fair coming up soon? What about a large office party? We provide Security Services for those special occasions."
              ></Services>
            </div>
            <div className="col-sm-4">
              <Services
                title="Retails, Office and Corporate"
                image={image3}
                desc="We provide Security Guard Services to retail stores, office buildings, and corporate locations."
              ></Services>
            </div>
            <div className="col-sm-4">
              <Services
                title="Retails, Office and Corporate"
                image={image4}
                desc="Running a Family Practice and thinking about hiring Security? Do you manage a Medical Building and are looking for Security? You have come to the right place."
              ></Services>
            </div>
            <div className="col-sm-4">
              <Services
                title="Retails, Office and Corporate"
                image={image1}
                desc="We provide Security Guard Services for that special day, whether it be a Wedding, Concert, Birthday, or Convention. We can help."
              ></Services>
            </div>
            <div className="col-sm-4">
              <Services
                title="Retails, Office and Corporate"
                image={image3}
                desc="Don't find what you are looking for? We can help with that.
                Call us today: 289-489-4336"
              ></Services>
            </div>

            <div className="col-sm-12">
              <Services
                title="
Here's a List of Services we Provide"
                image={image5}
                desc="Having an upcoming Event or Large Fair coming up soon? What about a large office party? We provide Security Services for those special occasions."
              ></Services>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesData;
