import React from 'react';
import '../CSS/Reusable/Footer/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <ul id="button">
        <a href="https://www.facebook.com/">
          <img
            src="https://img.icons8.com/color/48/000000/facebook-circled.png"
            alt="facebookicon"
          />
        </a>

        <a href="https://www.youtube.com/">
          <img
            src="https://img.icons8.com/fluent/48/000000/youtube-play.png"
            alt="youtubeicon"
          />
        </a>

        <a href="https://www.twitter.com/">
          <img
            src="https://img.icons8.com/color/48/000000/twitter-circled.png"
            alt="twittericon"
          />
        </a>

        <a href="https://www.instagram.com/">
          <img
            src="https://img.icons8.com/color/48/000000/instagram.png"
            alt="instaicon"
          />
        </a>
      </ul>

      <ul className="info">
        <li>Ecris nous</li>
        <li>festivalwild@gmail.com</li>
        <li>@FestivalWild, tous droits réservés</li>
      </ul>
    </div>
  );
}

export default Footer;
