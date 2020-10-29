import React from 'react';
import PageStyle from '../PageStyle/PageStyle';
import '../CSS/Home/Home.css';
import Footer from '../Reusable/Footer/Footer';
import NavBar from '../Reusable/NavBar/Navbar';

function Home() {
  return (
    <div>
      <NavBar />
      <PageStyle />
      <Footer />
    </div>
  );
}

export default Home;
