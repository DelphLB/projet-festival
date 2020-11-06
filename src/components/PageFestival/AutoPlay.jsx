import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import Slider from 'react-slick';
import '../CSS/festivals/AutoPlay.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import axios from 'axios';

const AutoPlay = (props) => {
  const { idFestival } = props;

  const [artists, setArtists] = useState([]);

  // const { idFestival } = match.params;

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 10,
    cssEase: 'linear',
    arrows: false,
  };

  useEffect(() => {
    axios
      .get(
        `https://api-festit-09-20.herokuapp.com/api/festivals/${idFestival}/artists`
      )
      .then((response) => response.data)
      .then((data) => setArtists(data));
  }, [idFestival]);
  return (
    <div className="container-artists">
      {/* eslint-disable react/jsx-props-no-spreading */}
      <Slider {...settings}>
        {artists.map((artist) => (
          <div>{artist.name}</div>
        ))}
      </Slider>
    </div>
  );
};

AutoPlay.propTypes = {
  idFestival: PropTypes.number.isRequired,
};
export default AutoPlay;
