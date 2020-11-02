import React from 'react';
import BoxStyle from './BoxStyle';
import '../CSS/Home/Home.css';
import Footer from '../Reusable/Footer/Footer';
import NavBar from '../Reusable/NavBar/Navbar';

function Home() {
  return (
    <div>
      <NavBar />
      <BoxStyle />
      <Footer />
    </div>
  );
}

export default Home;
