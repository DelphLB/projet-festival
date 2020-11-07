import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../style/CSS/PageArtiste/Artiste.css';
// import ListeArtiste from '../PageArtiste/ListeArtiste';

const Artiste = () => {
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

  return (
    <div className="container">
      <Link to="/artiste">Artiste</Link>

      <h1 className="artiste-title">Artistes</h1>

      <div className="container-letter">
        {alphabet.map((letter) => (
          <button
            type="button"
            onClick={() => handlePokemon(letter)}
            className="boutton-letters"
          >
            {letter}
          </button>
        ))}
      </div>

      <div>
        {filterPokemon !== null
          ? filterPokemon.map((pokemon) => (
              <div className="pokemon">{pokemon.name}</div>
            ))
          : pokemons.map((pokemon) => (
              <div className="pokemon">{pokemon.name}</div>
            ))}

        {/* {filterPokemon !== null &&  <div className="pokemon">'ko'</div>} */}
      </div>
    </div>
  );
};

export default Artiste;
