import React, { useState, useEffect, createRef } from "react";
import "antd/dist/antd.css";
import "./Carousel.scss";
import { Carousel, Avatar } from "antd";
import Card from "../card";
import DummyData from "dummyData/dummyDataCarousel";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const CarouselNotice = () => {
  const [cards, setCards] = useState();

  const carousel = createRef();

  const handleNext = () => carousel.current.next();

  const handlePrev = () => carousel.current.prev();

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
              meta={item.meta}
            />
          </div>
        )
      )
    );
  }, []);

  return (
    <div className="carouselContainer">
      <div className="carousel">
        <Carousel
          autoplay
          dots={false}
          infinite={true}
          slidesToShow={2}
          slidesToScroll={1}
          speed={2000}
          autoplaySpeed={4000}
          ref={carousel}
        >
          {cards}
        </Carousel>
      </div>
      <div className="iconContainer">
        <Avatar onClick={handlePrev} shape="circle" className="iconCarousel" size={45} icon={<LeftOutlined />} />
        <Avatar onClick={handleNext} shape="circle" className="iconCarousel" size={45} icon={<RightOutlined />} />
      </div>
    </div>
  );
};

export default CarouselNotice;
