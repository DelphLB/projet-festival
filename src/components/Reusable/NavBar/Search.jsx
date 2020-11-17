import React, { useState, useEffect } from 'react';
import '../../../style/CSS/Reusable/Navbar/Search.css';
import * as AiIcons from 'react-icons/ai';
import ReactSearchBox from 'react-search-box';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Search() {
  const [click, setClick] = useState(false);
  const [dataArray, setDataArray] = useState([]);
  const [idFest, setIdFest] = useState(null);

  function getData() {
    axios
      .get('https://api-festit-09-20.herokuapp.com/api/festivals/')
      .then((response) => response.data)
      .then((data) => {
        setDataArray(data);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  const handleId = (e) => {
    setIdFest(e.idfestival);
  };

  return (
    <div className="search-icon">
      <AiIcons.AiOutlineSearch onClick={() => setClick(!click)} />
      <div className={click ? 'search_active' : 'search'}>
        <ReactSearchBox
          placeholder=" Entrez un festival"
          value=""
          onSelect={(e) => handleId(e)}
          data={dataArray}
        />
        <Link to={`/festivals/${idFest}`}>
          <button className="buttonGo">⇨</button>
        </Link>
      </div>
    </div>
  );
}

export default Search;
