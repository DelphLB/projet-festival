import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../style/CSS/PageArtiste/Artiste.css';

import Navbar from '../Reusable/NavBar/Navbar';
import Footer from '../Reusable/Footer/Footer';

const Artists = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filterPokemon, setFilterPokemon] = useState(null);
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
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((response) => setPokemons(response.data.results));
  }, []);

  const handlePokemon = (letter) => {
    const newArray = [];

    pokemons
      .filter(
        (elem) =>
          elem.name.charAt(0) === letter.toLowerCase() && newArray.push(elem)
      )
      .map(() => {
        setFilterPokemon(newArray);
        return newArray;
      });
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
            onClick={() => handlePokemon(letter)}
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
          {filterPokemon !== null
            ? filterPokemon.map((pokemon) => (
                <div className="artists">{pokemon.name}</div>
              ))
            : pokemons.map((pokemon) => (
                <div className="artists">{pokemon.name}</div>
              ))}

          {/* {filterPokemon !== null &&  <div className="pokemon">'ko'</div>} */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Artists;
