import React from 'react';
import '../../../style/CSS/Reusable/Footer/Footer.css';
import PropTypes from 'prop-types';
import * as SiIcons from 'react-icons/si';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Footer({ style }) {
  return (
    <div
      className="footer"
      style={{ backgroundColor: style ? style.color : 'black' }}
    >
      <IconContext.Provider value={{ color: '#fff' }}>
        <ul id="button">
          <a href="https://www.facebook.com/">
            <FaIcons.FaFacebook />
          </a>

          <a href="https://www.youtube.com/">
            <SiIcons.SiYoutube />
          </a>

          <a href="https://www.twitter.com/">
            <AiIcons.AiOutlineTwitter />
          </a>

          <a href="https://www.instagram.com/">
            <SiIcons.SiInstagram />
          </a>
        </ul>

        <ul className="info">
          <li>Ecris nous</li>
          <li>festivalwild@gmail.com</li>
          <li>@FestivalWild, tous droits réservés</li>
        </ul>
      </IconContext.Provider>
    </div>
  );
}

Footer.propTypes = {
  style: PropTypes.shape({
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default Footer;
