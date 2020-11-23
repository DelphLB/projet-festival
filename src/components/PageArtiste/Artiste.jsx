import React, { useEffect, useState, useContext } from 'react';
import '../../style/CSS/PageArtiste/Artiste.css';
import { ThemeContext } from '../../ThemeContext';

import axios from 'axios';
import PropTypes from 'prop-types';

import Navbar from '../Reusable/NavBar/Navbar';
import Footer from '../Reusable/Footer/Footer';

const Artiste = ({ match }) => {
  const { idartist } = match.params;
  const [theme] = useContext(ThemeContext);

  const [artiste, setArtiste] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api-festit-09-20.herokuapp.com/api/artists/id/${idartist}`)
      .then((response) => response.data)
      .then((data) => setArtiste(data));
  }, []);

  return (
    <div className="container-parent-artiste" className={theme}>
      <Navbar />
      {artiste.map((artist) => (
        <div className="container-art">
          <div className="banner-artiste-texte">
            <div className="artiste-info">
              <p className="artiste-nom">{artist.name}</p>
              <p className="country-artiste"> France ,</p>
              <div className="music-boutton">
                <a
                  href={artist.music_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="boutton-play"
                    src="https://arras.salon-idhome.fr/wp-content/themes/ave-child/play.jpg"
                    alt=""
                  />
                </a>
                <div className="music">
                  <p className="top-music"> Top musique </p>
                  <p className="title-music"> God&apos;s Gonna Cut You Down </p>
                </div>
              </div>
            </div>
            <div className="div-image">
              {' '}
              <img
                className="image-artiste"
                src={artist.image_url}
                alt=""
              />{' '}
            </div>
          </div>
          <div className="container-description-artiste">
            <p className="descritpion-artiste">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
              minus eveniet qui, labore veritatis recusandae fugiat accusantium,
              commodi incidunt blanditiis ex laudantium atque nihil, repudiandae
              enim? Aperiam quos debitis porro.
            </p>
          </div>

          {/* <div className="container-artiste-image">
            <div
              className="image-artiste"
              style={{
                backgroundImage: `url(${artist.image_url})`,
                backgroundSize: 'cover',
              }}
            ></div>

            <div className="container-description-artiste"> </div>
          </div> */}
        </div>
      ))}

      <Footer />
    </div>
  );
};
Artiste.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ idartist: PropTypes.number }).isRequired,
  }).isRequired,
};
export default Artiste;
