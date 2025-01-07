import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import image1 from './Images/house1.jpg';
import image2 from './Images/house2.jpeg';
import image3 from './Images/house3.jpeg';
import image4 from './Images/house4.jpeg';


const slideshow = [image1, image2, image3, image4];

const ImageCarousel = () => {

  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '80px',
    fade: true,
    pauseOnHover: true,
    dots: true,
};
  return (
    <div style={{ width: '100%', margin: 'auto' }}>
      <Fade duration={2000}>
        {slideshow.map((image, index) => (
          <div key={index} className="each-fade">
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%',height:'45dvh' }} />
          </div>
        ))}
      </Fade>
      
      <Slider {...settings}>
        {slideshow.map((image, index) => (
          <div key={index} className="each-fade">
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%',height:'35vh' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;