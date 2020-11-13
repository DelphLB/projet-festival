import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../style/CSS/PageArtiste/Artiste.css';

import Navbar from '../Reusable/NavBar/Navbar';
import Footer from '../Reusable/Footer/Footer';

const Artists = () => {
  const [listArtists, setListArtists] = useState([]);
  const [filterArtists, setFilterArtists] = useState(null);
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  useEffect(() => {
    axios
      .get('https://api-festit-09-20.herokuapp.com/api/artists')
      .then((response) => setListArtists(response.data));
  }, []);

  const handleArtists = (letter) => {
    const newArray = [];

    listArtists.filter(
      (elem) =>
        elem.name.charAt(0).toLowerCase() === letter.toLowerCase() &&
        newArray.push(elem)
    );
    setFilterArtists(newArray);
  };

  const handleReset = () => {
    window.location.reload();
  };
  return (
    <div className="container">
      <Navbar />
      <Link to="/artists" className="artiste-title">
        <button
          onClick={() => handleReset()}
          onKeyDown={handleReset}
          className="artiste-title-cursor"
          type="button"
        >
          Artistes
        </button>
      </Link>

      <div className="container-letter">
        {alphabet.map((letter) => (
          <button
            type="button"
            onClick={() => handleArtists(letter)}
            className="boutton-letters"
          >
            <Link to={`/artists/${letter}`} className="letters">
              {letter}
            </Link>
          </button>
        ))}
      </div>

      <div className="container-liste-artists">
        <div className="container-enfant-artists">
          {filterArtists !== null
            ? filterArtists.map((artists) => (
                <div
                  className="artists"
                  style={{
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: `url(${artists.image_url})`,
                  }}
                >
                  <p className="nameArtistBox">{artists.name}</p>
                </div>
              ))
            : listArtists.map((artists) => (
                <div
                  className="artists"
                  style={{
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: `url(${artists.image_url})`,
                  }}
                >
                  <h3 className="nameArtistBox">{artists.name}</h3>
                </div>
              ))}

          {/* {filterPokemon !== null &&  <div className="pokemon">'ko'</div>} */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Artists;
