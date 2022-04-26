import React from "react";
import { Carousel, Image } from "react-bootstrap";

const HomeCarousel = () => {
  // Carousel image source array -----------------------
  const carouselItemArray = [
    {
      label: "First Event of 2022",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      src: "/carousel-images/1.jpg",
    },
    {
      label: "Second Event of 2022",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      src: "/carousel-images/2.jpg",
    },
    {
      label: "Third Event of 2022",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      src: "/carousel-images/3.jpg",
    },
    {
      label: "Fourth Event of 2022",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      src: "/carousel-images/4.jpg",
    },
  ];
  return (
    // Carousel component for landing page --------------------------------
    <Carousel>
      {carouselItemArray.map((item) => (
        <Carousel.Item key={item.label}>
          <div className="overflow-hidden">
            <Image className="d-block w-100" src={item.src} alt={item.label} />
          </div>
          <Carousel.Caption>
            <h3>{item.label}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
