import React, { Component } from 'react';
import axios from 'axios';
import '../../style/CSS/festivals/BoxFest.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navbar from '../Reusable/NavBar/Navbar';
import Footer from '../Reusable/Footer/Footer';
import AutoPlay from './AutoPlay';

class BoxFest extends Component {
  constructor() {
    super();
    this.state = {
      festivals: {},
      tickets: [],
      ticket: {},
      isToggleOn: false,
      isToggle: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouse = this.handleMouse.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { idfestival } = match.params;
    axios
      .get(`https://api-festit-09-20.herokuapp.com/api/festivals/${idfestival}`)
      .then((response) => {
        this.setState({
          festivals: response.data[0],
        });
      });

    axios
      .get(
        `https://api-festit-09-20.herokuapp.com/api//tickets/festivals/${idfestival}`
      )
      .then((response) => {
        this.setState({
          tickets: response.data,
          ticket: response.data[0],
        });
      });
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  handleMouse(pack) {
    this.setState(() => ({
      isToggle: pack.idticket,
    }));
  }

  render() {
    const { festivals, ticket, tickets } = this.state;
    const Toggle = this.state;
    const isToggle = this.state;
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
            <div className="cadreTitle" />
            <h2 className="styleNameFest">{festivals.name}</h2>
          </div>
        </div>
        {/* ------- Partie description ---------*/}

        <div
          className="container-description"
          aria-hidden="true"
          onClick={this.handleClick}
        >
          <div className="descriptionFestival">
            <p className="details">
              {' '}
              <p className="fleche"> &darr; </p>
              <p className="description">Description</p>{' '}
              <p className="fleche"> &darr; </p>
            </p>
            {Toggle.isToggleOn ? (
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
            <p className="text-icone">{ticket.price} € </p>
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
                onMouseEnter={() => this.handleMouse(pack)}
                onMouseLeave={this.handleMouse}
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

                  {isToggle.isToggle === pack.idticket ? (
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
  }
}

BoxFest.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ idfestival: PropTypes.number }).isRequired,
  }).isRequired,
};

export default BoxFest;
