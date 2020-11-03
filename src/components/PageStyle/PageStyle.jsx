import React from 'react';
import NavBar from '../Reusable/NavBar/Navbar';
import Footer from '../Reusable/Footer/Footer';
import Banner from './componentsStyle/Banner';
import Box from './componentsStyle/Box';
import '../CSS/PageStyle/PageStyle.css';

function PageStyle() {
  // const { idStyle } = match.params;
  // Appel Api couleur
  // axios.get(//style/id)
  // {id, name, color}

  return (
    <div className="Style">
      <NavBar />
      <Banner />
      <Box />
      <Footer />
    </div>
  );
}

export default PageStyle;
