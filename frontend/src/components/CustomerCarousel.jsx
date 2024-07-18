import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/carousel.css'; // Your custom CSS for carousel styles
import logo1 from '../assets/company/img1.jpg'; 
import logo2 from '../assets/company/img2.jpg';
import logo3 from '../assets/company/img3.jpg';
import logo4 from '../assets/company/img4.jpg';
import logo5 from '../assets/company/img5.jpg';
import logo6 from '../assets/company/img6.jpg';
import logo7 from '../assets/company/img7.jpg';
import logo8 from '../assets/company/img8.jpg';
import logo9 from '../assets/company/img9.jpg';
import logo10 from '../assets/company/img10.jpg';
import logo11 from '../assets/company/img11.jpg';
import logo12 from '../assets/company/img12.jpg';
import logo13 from '../assets/company/img13.jpg';
import logo14 from '../assets/company/img14.jpg';
import logo15 from '../assets/company/img15.jpg';
import logo16 from '../assets/company/img16.jpeg';

const CustomerCarousel = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000, // Increased speed
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000, // Adjusted autoplay speed
      cssEase: 'linear',
      centerMode: true,
      centerPadding: '0',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  

  return (
    <div className="customer-carousel">
          <h2 className="carousel-title">Our Valuable Customers</h2>
      <Slider {...settings}>
        <div className="customer-logo">
          <img src={logo1} alt="Customer Logo 1" />
        </div>
        <div className="customer-logo">
          <img src={logo2} alt="Customer Logo 2" />
        </div>
        <div className="customer-logo">
          <img src={logo3} alt="Customer Logo 3" />
        </div>
        <div className="customer-logo">
          <img src={logo4} alt="Customer Logo 4" />
        </div>
        <div className="customer-logo">
          <img src={logo5} alt="Customer Logo 5" />
        </div>
        <div className="customer-logo">
          <img src={logo6} alt="Customer Logo 6" />
        </div>
        <div className="customer-logo">
          <img src={logo7} alt="Customer Logo 7" />
        </div>
        <div className="customer-logo">
          <img src={logo8} alt="Customer Logo 8" />
        </div>
        <div className="customer-logo">
          <img src={logo9} alt="Customer Logo 9" />
        </div>
        <div className="customer-logo">
          <img src={logo10} alt="Customer Logo 10" />
        </div>
        <div className="customer-logo">
          <img src={logo11} alt="Customer Logo 11" />
        </div>
        <div className="customer-logo">
          <img src={logo12} alt="Customer Logo 12" />
        </div>
        <div className="customer-logo">
          <img src={logo13} alt="Customer Logo 13" />
        </div>
        <div className="customer-logo">
          <img src={logo14} alt="Customer Logo 14" />
        </div>
        <div className="customer-logo">
          <img src={logo15} alt="Customer Logo 15" />
        </div>
        <div className="customer-logo">
          <img src={logo16} alt="Customer Logo 16" />
        </div>
      </Slider>
    </div>
  );
};

export default CustomerCarousel;
