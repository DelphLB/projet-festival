import React from 'react';
import BoxStyle from './BoxStyle';
import '../../style/CSS/Home/Home.css';
import Footer from '../Reusable/Footer/Footer';
import Navbar from '../Reusable/Navbar/Navbar';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <BoxStyle />
      <Footer />
    </div>
  );
}

export default Home;
