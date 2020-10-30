import React from 'react';
import '../../CSS/Reusable/Footer/Footer.css';
import * as SiIcons from 'react-icons/si';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Footer() {
  return (
    <div className="footer">
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

export default Footer;
