import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../style/CSS/PageFestival/BoxFest.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navbar from '../Reusable/NavBar/Navbar';
import Footer from '../Reusable/Footer/Footer';
import AutoPlay from './AutoPlay';

const BoxFest = ({ match, location }) => {
  const [festivals, setFestivals] = useState({});
  const [tickets, setTickets] = useState([]);
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const { idfestival } = match.params;
  const { color } = location.state ? location.state : '';

  useEffect(() => {
    axios
      .get(`https://api-festit-09-20.herokuapp.com/api/festivals/${idfestival}`)
      .then((response) => response.data)
      .then((data) => setFestivals(data[0]));

    axios
      .get(
        `https://api-festit-09-20.herokuapp.com/api/tickets/festivals/${idfestival}`
      )
      .then((response) => setTickets(response.data));
  }, [idfestival]);

  const handleClick = () => {
    setIsToggleOn(!isToggleOn);
  };

  const handleMouse = (pack) => {
    setIsToggle(pack.idticket);
  };

  const handleTicketsPrice = () => {
    const newPrice = [];

    tickets.map((ticket) => newPrice.push(ticket.price));

    newPrice.sort((a, b) => a - b);

    return newPrice[0];
  };

  return (
    <div className="festival" style={{ backgroundColor: `${color}` }}>
      <Navbar />
      {/* box festival : image en background et nom festoch */}
      <div className="fadeEffect">
        <div
          className="boxFestival"
          style={{
            backgroundImage: `url("${festivals.image1}")`,
            opacity: '0.7',
            backgroundSize: 'cover',
            zIndex: -1,
          }}
        >
          {' '}
          <div
            className="cadreTitle"
            // style={{
            //   content: '',
            //   width: '100%',
            //   position: 'absolute',
            //   left: 0,
            //   right: 0,
            //   height: '500px',
            //   opacity: 0.85,
            //   background: `linear - gradient(transparent, ${color} 90% )`,
            //   Zindex: 1,
            // }}
          />
          <h2 className="styleNameFest">{festivals.name}</h2>
        </div>
      </div>
      {/* ------- Partie description ---------*/}

      <div
        className="container-description"
        aria-hidden="true"
        onClick={() => handleClick()}
        style={{ backgroundColor: `${color}` }}
      >
        <div className="descriptionFestival">
          <p className="details">
            <p className="fleche"> &darr; </p>
            <p className="description">DESCRIPTION</p>
            <p className="fleche"> &darr; </p>
          </p>
          {isToggleOn ? (
            <div className="descriptionText">{festivals.description}</div>
          ) : (
            ''
          )}
        </div>
      </div>
      {/* ------- Partie description ---------*/}
      {/* -----Partie icones ----- */}
      <div className="container-icones">
        <div className="icone-texte">
          <img
            className="image-icone"
            src="https://www.flaticon.com/svg/static/icons/svg/929/929426.svg"
            alt="location"
          />
          <p className="text-icone"> {festivals.city}</p>
        </div>

        <div className="icone-texte">
          <img
            className="image-icone"
            src="https://www.flaticon.com/svg/static/icons/svg/1861/1861233.svg"
            alt="date"
          />
          <p className="text-icone">
            {festivals.startDate} {festivals.endDate}
          </p>
        </div>
        <div className="icone-texte">
          <img
            className="image-icone"
            src="https://www.flaticon.com/svg/static/icons/svg/945/945582.svg"
            alt="price"
          />
          <p className="text-icone">
            A partir de {handleTicketsPrice(tickets)}€
          </p>
        </div>
      </div>
      {/* -------fin partie icones -------- */}
      {/* ------ le lineup ---------- */}
      <AutoPlay idFestival={festivals.idfestival} />
      {/* package festival (box ticket) */}
      <div className="section950px">
        <div className="cardsPack">
          {tickets.map((pack) => (
            <div
              className="packCadre"
              onMouseEnter={() => handleMouse(pack)}
              onMouseLeave={() => handleMouse(!pack)}
            >
              <div className="imagepackcard">
                <img
                  className="imgCard"
                  src="https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695_960_720.jpg"
                  alt="imagecard"
                />
              </div>
              <div className="textPack">
                <h2>{pack.name}</h2>

                <p>{pack.description}</p>

                {isToggle === pack.idticket ? (
                  <div className="moreInfo">
                    <p>{pack.date}</p>
                    <p>{pack.price}€</p>
                    <Link
                      to="/payment"
                      style={{
                        textDecoration: 'none',
                      }}
                    >
                      <div className="bouttonResa"> &gt; Réserver</div>
                    </Link>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section951px">
        <div className="cardsPack">
          {tickets.map((pack) => (
            <div className="packCadre">
              <div className="imagepackcard">
                <img
                  className="imgCard"
                  src="https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695_960_720.jpg"
                  alt="imagecard"
                />
              </div>
              <div className="textPack">
                <h2>{pack.name}</h2>

                <p>{pack.description}</p>

                <div className="moreInfo">
                  <p>{pack.date}</p>
                  <p>{pack.price}€</p>
                  <Link
                    to="/payment"
                    style={{
                      textDecoration: 'none',
                    }}
                  >
                    <div className="bouttonResa"> &gt; Réserver</div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
BoxFest.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ idfestival: PropTypes.number }).isRequired,
  }).isRequired,

  location: PropTypes.shape({
    state: PropTypes.shape({ color: PropTypes.string }).isRequired,
  }).isRequired,
};

export default BoxFest;
