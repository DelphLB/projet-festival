import React, { useState } from 'react';
import '../../../style/CSS/Reusable/Navbar/Navbar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import Search from './Search';

function Navbar() {
  const [topbar, setTopbar] = useState(false);

  const showTopbar = () => setTopbar(!topbar);

  const TopbarData = [
    {
      title: 'Accueil',
      path: '/',
      icons: <AiIcons.AiOutlineHome />,
      className: 'nav-text',
    },
    {
      title: 'A propos',
      path: '/apropos',
      icons: <AiIcons.AiOutlineInfoCircle />,
      className: 'nav-text',
    },
    {
      title: 'Contact',
      path: '/contact',
      icons: <AiIcons.AiOutlineMessage />,
      className: 'nav-text',
    },
    // {
    //   title: 'Politique de Confidentialité',
    //   path: '/politique-de-confidentialité',
    //   icons: <AiIcons.AiOutlineFileExclamation />,
    //   className: 'nav-text',
    // },
  ];

  return (
    <div className="Navbar">
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <Link to="/" className="menu-bars">
            <FaIcons.FaBars onClick={showTopbar} />
          </Link>
        </div>
        <nav className={topbar ? 'nav-menu active' : 'nav-menu'}>
          <p className="navbar-toggle">
            <Link to="/" className="menu-close" onClick={showTopbar}>
              <AiIcons.AiOutlineClose />
            </Link>
          </p>
          <div className="nav-menu-items">
            <div className="searchbar">
              <Search />
            </div>
            {TopbarData.map((item) => {
              return (
                <div key={item.title} className={item.className}>
                  <Link to={item.path}>
                    {item.icons}
                    <span>{item.title}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
