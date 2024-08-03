import React from "react";
import "./news.css";
function News(props) {
  return (
    <>
      <div class="card">
        <img src={props.NewsImage} class="card-img-top" alt="..." />
        <div className="time">
          <h4>
            <i className="fa-solid fa-calendar-days"></i>
            {props.date}
          </h4>
          <h4>
            <i class="fa-regular fa-clock"></i>
            {props.time}
          </h4>
        </div>
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.desc}</p>
          <button className="btn">Read More</button>
        </div>
      </div>
    </>
  );
}

export default News;
