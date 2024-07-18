import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/hero.css'; // Your custom CSS for carousel styles
import hero1 from '../assets/main/2.png';
import hero2 from '../assets/main/3.png';
import hero3 from '../assets/main/1.png';

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 950,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2600,
    cssEase: 'linear',
  };

  return (
    <div className="hero-carousel">
      <Slider {...settings}>
        <div className="hero-slide">
          <img src={hero1} alt="Hero 1" />
        </div>
        <div className="hero-slide">
          <img src={hero2} alt="Hero 2" />
        </div>
        <div className="hero-slide">
          <img src={hero3} alt="Hero 3" />
        </div>
      </Slider>
    </div>
  );
};

export default HeroCarousel;
