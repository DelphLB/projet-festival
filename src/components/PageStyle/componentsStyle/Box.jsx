import React, { useState, useEffect } from 'react';
import '../../CSS/PageStyle/Box.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import aos from 'aos';

const Box = () => {
  const [boxs, setBoxs] = useState([]);

  useEffect(() => {
    Axios.get(`https://api-festit-09-20.herokuapp.com/api/festivals/`)
      .then((result) => result.data)
      .then((data) => setBoxs(data));
    aos.init();
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="3000">
      {boxs.map((box) => (
        <div className="Box">
          <div className="boxImage">
            <img src={box.image1} alt="festival" />
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque fermentum tempus libero viverra vestibulum. Duis
              hendrerit tortor id velit ornare imperdiet.
            </p>
          </div>
          <button type="button" className="boxbutton">
            <Link to="/">En savoir plus</Link>
          </button>
        </div>
      ))}
    </div>
  );
};
export default Box;
