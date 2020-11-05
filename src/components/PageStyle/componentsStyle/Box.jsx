import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import aos from 'aos';

import Axios from 'axios';
import { Link } from 'react-router-dom';

import '../../CSS/PageStyle/Box.css';

const Box = ({ style }) => {
  const [boxs, setBoxs] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://api-festit-09-20.herokuapp.com/api/festivals/style/${style.name}`
    )
      .then((result) => result.data)
      .then((data) => setBoxs(data));

    aos.init();
  }, [style.name]);

  return (
    <div data-aos="fade-up" data-aos-duration="3000">
      {boxs &&
        boxs.map((box) => (
          <div className="Box" style={{ backgroundColor: style.color_two }}>
            <div className="title">
              <p>{box.name}</p>
            </div>
            <div className="boxImage">
              <img src={box.image1} alt={box.name} title={box.name} />
            </div>
            <div className="text">
              <p>{box.description}</p>
            </div>
            <button
              type="button"
              className="boxbutton"
              style={{ backgroundColor: style.color }}
            >
              <Link to="/">En savoir plus</Link>
            </button>
          </div>
        ))}
    </div>
  );
};

Box.propTypes = {
  style: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color_two: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default Box;
