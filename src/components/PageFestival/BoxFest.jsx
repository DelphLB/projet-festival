import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../style/CSS/PageFestival/BoxFest.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navbar from '../Reusable/NavBar/Navbar';
import Footer from '../Reusable/Footer/Footer';
import AutoPlay from './AutoPlay';

const BoxFest = ({ match }) => {
  const [festivals, setFestivals] = useState({});
  const [tickets, setTickets] = useState([]);
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const { idfestival } = match.params;
  // const [idStyle, setIdStyle] = useState([]);
  // const colorStyle: {},

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

    // axios
    //   .get(
    //     `https://api-festit-09-20.herokuapp.com/api/festivals/${idfestival}/style`
    //   )
    //   .then((response) => response.data[0])
    //   .then((data) => setIdStyle(data.idstyle));

    // axios
    //   .get(`https://api-festit-09-20.herokuapp.com/api/styles/${idStyle}`)
    //   .then((response) => console.log(response.data));
    // this.setState({
    // //     //  colorStyle: response.data,
    //     // })
  }, []);

  // axios   setTickets(res.data), setTicket(res.data[0])
  //   .get(
  //     `https://api-festit-09-20.herokuapp.com/api/festivals/${idfestival}/style`
  //   )
  //   .then((response) =>
  //     this.setState({
  //       idStyle: response.data[0].idstyle,
  //     })
  //   );

  // axios
  //   .get(`https://api-festit-09-20.herokuapp.com/api/styles/${idStyle}`)
  //   .then(
  //     (response) => console.log(response)
  //     // this.setState({
  //     //  colorStyle: response.data,
  //     // })
  //   );

  const handleClick = () => {
    setIsToggleOn(!isToggleOn);
  };

  const handleMouse = (pack) => {
    setIsToggle(pack.idticket);
  };

  return (
    <div className="festival">
      <Navbar />
      {/* box festival : image en background et nom festoch */}
      <div className="fadeEffect">
        <div
          className="boxFestival"
          style={{
            backgroundImage: `url("${festivals.image1}")`,
            backgroundSize: 'cover',
            zIndex: -1,
          }}
        >
          {' '}
          <div className="cadreTitle" />
          <h2 className="styleNameFest">{festivals.name}</h2>
        </div>
      </div>
      {/* ------- Partie description ---------*/}

      <div
        className="container-description"
        aria-hidden="true"
        onClick={() => handleClick()}
      >
        <div className="descriptionFestival">
          <p className="details">
            {' '}
            <p className="fleche"> &darr; </p>
            <p className="description">Description</p>{' '}
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
          {tickets.map((ticket) => (
            <p className="text-icone">{ticket.price} € </p>
          ))}
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
                      to="/"
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
                    to="/"
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
};

export default BoxFest;
