import React from "react";
import "./Card.scss";

const CardComponent = (props) => {
  const { img, title, description, meta } = props;
  return (
    <div class="box gallery">
      <div class="card">
        <div class="background">
          <img width="100%" alt="example" src={require("../../" + img)} />
        </div>
        <a href="#" class="overlay"></a>
        <a href="#">
          <i class="fa fa-camera-retro"></i>
        </a>
        <a class="thumb" href="#">
          <div class="info">
            <h2>
              <a href="#">{title}</a>
              <a href="#">{description}</a>
            </h2>
            <div class="foot">
              <i class="line"></i>
              <span class="date">{meta}</span>
              <a href="#" target="_blank" class="social">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="#" target="_blank" class="social">
                <i class="fa fa-twitter"></i>
              </a>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CardComponent;
