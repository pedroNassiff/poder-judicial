import React from "react";
import "./Card.scss";

const CardComponent = (props) => {
  const { img, title, description, meta } = props;
  return (
    <div className="box gallery">
      <div className="card">
        <div className="background">
          <img width="100%" alt="example" src={require("../../" + img)} />
        </div>
        <a href="#" className="overlay"></a>
        <a href="#">
          <i className="fa fa-camera-retro"></i>
        </a>
        <a className="thumb" href="#">
          <div className="info">
            <h2>
              <a href="#">{title}</a>
              <a href="#">{description}</a>
            </h2>
            <div className="foot">
              <i className="line"></i>
              <span className="date">{meta}</span>
              <a href="#" target="_blank" className="social">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" target="_blank" className="social">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CardComponent;
