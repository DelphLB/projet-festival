import React, { useState } from 'react';
import '../../CSS/Reusable/NavBar/Search.css';
import * as AiIcons from 'react-icons/ai';

function Search() {
  const [click, setClick] = useState(false);
  return (
    <div>
      <AiIcons.AiOutlineSearch onClick={() => setClick(!click)} />
      <input
        className={click ? 'search_active' : 'search'}
        text="area"
        placeholder="    Recherche un festival , un artist .."
      />
    </div>
  );
}

export default Search;
