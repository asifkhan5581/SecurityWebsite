import React from "react";
import Security from "../../Componant/SecurityTrust/Security";
import image1 from "../../images/securityImage.jpg";
function SecurityData() {
  return (
    <>
      <div className="main-seurity">
        <div className="security-image">
          <Security image={image1}></Security>
        </div>
        <div className="security-details">
          <Security
            title="A Security Compant that you can trust"
            description="Locally Owned and Operated in the Heart of Hamilton, Ontario, Hashir Security Services - HSS is built with a simple and easy foundation, by providing Security Guard Services that are built on Trust and Integrity."
          ></Security>
          <Security
            title="No Surprises"
            description="Hashir Security Services (HSS) makes sure that there is no surprise fees and hidden charges in any of our services. There are many payment options and flexible commitments with our contracts. We believe our clients deserve honesty and transparency with our services."
          ></Security>
          <Security
            title="A personalized security service, tailored for your needs."
            description="When it comes to services, HSS provides a variety of options for both large corporations and smaller businesses. And, it's customized to tailor your needs. Always."
          ></Security>
        </div>
      </div>
    </>
  );
}

export default SecurityData;
