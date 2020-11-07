import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import NavBar from '../Reusable/NavBar/Navbar';
import Footer from '../Reusable/Footer/Footer';
import Banner from './componentsStyle/Banner';
import Box from './componentsStyle/Box';
import '../../style/CSS/PageStyle/PageStyle.css';

function PageStyle({ match }) {
  const [style, setStyle] = useState([]);
  const { idStyle } = match.params;

  useEffect(() => {
    Axios.get(`https://api-festit-09-20.herokuapp.com/api/styles/${idStyle}`)
      .then((response) => response.data[0])
      .then((data) => setStyle(data));
  }, [idStyle]);
  return (
    <div className="Style" style={{ backgroundColor: style.color }}>
      <NavBar />
      <Banner style={style} />
      <Box style={style} />
      <Footer style={style} />
    </div>
  );
}

PageStyle.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      idStyle: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default PageStyle;
