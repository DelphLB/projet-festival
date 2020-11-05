import React, { useState, useEffect } from 'react';
import '../../../style/CSS/Reusable/Navbar/Search.css';
import * as AiIcons from 'react-icons/ai';
import ReactSearchBox from 'react-search-box';
import axios from 'axios';

function Search() {
  const [click, setClick] = useState(false);
  // const [queryInput, setQueryInput] = useState('');
  const [dataArray, setDataArray] = useState([]);
  const getData = () => {
    axios
      .get('https://api-festit-09-20.herokuapp.com/api/festivals')
      .then((response) => response.data)
      .then((data) => {
        setDataArray(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  // const handleInputChange = (event) => {
  //   setQueryInput(event.target.value);
  // };
  return (
    <div className="search-icon">
      <AiIcons.AiOutlineSearch onClick={() => setClick(!click)} />
      <div className={click ? 'search_active' : 'search'}>
        <ReactSearchBox
          placeholder=" Entrer un artiste , un festival ect .."
          value=""
          data={dataArray}
        />
        {/* // onChange={(e) => console.log(e)}) */}
      </div>
    </div>
  );
}

export default Search;
