import React from "react";
import News from "./News";
import NewsImage1 from "../../images/News1.jpg";
import NewsImage2 from "../../images/News2.jpg";
import NewsImage3 from "../../images/News3.jpg";
import "./news.css";
function NewsData() {
  return (
    <>
      <div className="news">
        <div className="news-contant">
          <h1>Recent News</h1>
          <p>
            Here you can find some tips on getting started working as a Security
            Guard, Learning about Security Guard Services and Much More.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <News
                NewsImage={NewsImage1}
                title="How to work for a Security Guard Company in Ontario?"
                desc="So, You want to work for a Security Guard Company in Ontario? But you have no idea where to start?"
                date="12/4/2024"
                time="10:50 am"
              ></News>
            </div>
            <div className="col-sm-4">
              <News
                NewsImage={NewsImage2}
                title="How to work for a Security Guard Company in Ontario?"
                desc="So, You want to work for a Security Guard Company in Ontario? But you have no idea where to start?"
                date="12/4/2024"
                time="10:50 am"
              ></News>
            </div>
            <div className="col-sm-4">
              <News
                NewsImage={NewsImage3}
                title="How to work for a Security Guard Company in Ontario?"
                desc="So, You want to work for a Security Guard Company in Ontario? But you have no idea where to start?"
                date="12/4/2024"
                time="10:50 am"
              ></News>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsData;
