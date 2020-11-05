import React, { Component } from 'react';
import axios from 'axios';
import '../CSS/festivals/BoxFest.css';
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
      // artists: [],
      ticket: {},
      isToggleOn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const festi = this.props;
    const { idfestival } = festi.match.params;
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

    // axios
    //   .get(
    //     `https://api-festit-09-20.herokuapp.com/api//festivals/${idfestival}/artists`
    //   )
    //   .then((response) => {
    //     this.setState({
    //       artists: response.data,
    //     });
    //   });
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    const { festivals } = this.state;
    const { tickets } = this.state;
    // const { artists } = this.state;
    const { ticket } = this.state;
    const Toggle = this.state;
    return (
      <div className="festival">
        <Navbar />;{/* box festival : image en background et nom festoch */}
        <div
          className="boxFestival"
          style={{
            backgroundImage: `url("${festivals.image1}")`,
            backgroundSize: 'cover',
          }}
        >
          <div className="cadreTitle" />
          <h2 className="styleNameFest">{festivals.name}</h2>
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
        <AutoPlay />
        {/* <div className="lineUp">
          <div className="title-lineUp">
            <p className="tiret"> &#8212;</p>
            <p> Line - Up </p>
            <p className="tiret"> &#8212;</p>
          </div>
          <div className="container-artist-name">
            {artists.map((artist) => ())}
          </div>
        </div> */}
        {/* ----- package festival (box ticket)------ */}
        <div className="packFestival">
          <div className="cardsPack">
            {tickets.map((pack) => (
              <div className="packCadre">
                <h3>{pack.name}</h3>
                <p>{pack.description}</p>
                <p>{pack.date}</p>
                <p>{pack.price}€</p>
                {/* lien vers la résa  */}
                <Link
                  to="/"
                  className="bouttonResa"
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <p>Réserver</p>
                </Link>
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
