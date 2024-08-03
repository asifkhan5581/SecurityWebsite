import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SocialData from "./SocialData";
import "./socialmedia.css";
function SocialMedia() {
  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 1 }}>
        <Masonry>
          <div className="social-media">
            <h1>Follow us on Social Media</h1>
            <div className="container">
              {SocialData.map((item) => {
                return (
                  <div className="social-contant">
                    <img
                      src={item.image1}
                      alt=""
                      style={{ width: "100%", display: "flex" }}
                    />
                    ;
                  </div>
                );
              })}
            </div>
            <h3>
              <a href="#">
                Check us out on Instagram{" "}
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </h3>
          </div>
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
}

export default SocialMedia;
