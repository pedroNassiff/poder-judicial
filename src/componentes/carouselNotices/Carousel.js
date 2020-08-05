import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./Carousel.scss";
import { Carousel } from "antd";
import Card from "../card";
import DummyData from "dummyData/dummyDataCarousel";

const CarouselNotice = () => {
  const [cards, setCards] = useState();

  useEffect(() => {
    setCards(
      DummyData.map(
        (item, i) => (
          <div>
            <Card
              key={i}
              img={item.img}
              title={item.title}
              description={item.description}
            />
          </div>
        )
      )
    );
  }, []);

  return (
    <Carousel
      autoplay
      dots={false}
      infinite={true}
      slidesToShow={3}
      slidesToScroll={1}
      speed={2000}
      autoplaySpeed={2000}
    >
    {cards}  
    </Carousel>
  );
};

export default CarouselNotice;
