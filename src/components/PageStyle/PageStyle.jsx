import React from 'react';
import Navbar from '../Reusable/NavBar/Navbar';
import Footer from '../Reusable/Footer/Footer';
import Banner from './componentsStyle/Banner';
import Box from './componentsStyle/Box';
import '../../style/CSS/PageStyle/PageStyle.css';

function PageStyle() {
  return (
    <div className="Style">
      <Navbar />
      <Banner />
      <Box />
      <Footer />
    </div>
  );
}

export default PageStyle;
