import React from 'react';

import Slider from 'react-slick';
import '../CSS/festivals/AutoPlay.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 10,
    cssEase: 'linear',
    arrows: false,
  };

  return (
    <div className="container-artists">
      <Slider {...settings}>
        <div> Nasrat</div>
        <div>Patrick Sebastien </div>
        <div>Queen.B</div>
        <div>Moi </div>
        <div>Grosse Resta </div>
        <div>quelqu un </div>
        <div>Wejdene</div>
        <div>Rammstein</div>
        <div> Nasrat</div>
        <div>Patrick Sebastien </div>
        <div>Queen.B</div>
        <div>Moi </div>
        <div>Grosse Resta </div>
        <div>quelqu un </div>
        <div>Wejdene</div>
        <div>Rammstein</div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
