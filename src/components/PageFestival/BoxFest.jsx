import React, { Component } from 'react';
import axios from 'axios';
import '../CSS/festivals/BoxFest.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navbar from '../Reusable/NavBar/Navbar';
import Footer from '../Reusable/Footer/Footer';

class BoxFest extends Component {
  constructor() {
    super();
    this.state = {
      festivals: {},
      tickets: [],
      artists: [],
      ticket: {},
      isToggleOn: false,
      isToggle: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouse = this.handleMouse.bind(this);
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

    axios
      .get(
        `https://api-festit-09-20.herokuapp.com/api//festivals/${idfestival}/artists`
      )
      .then((response) => {
        this.setState({
          artists: response.data,
        });
      });
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  handleMouse() {
    this.setState((state) => ({
      isToggle: !state.isToggle,
    }));
  }

  render() {
    const { festivals } = this.state;
    const { tickets } = this.state;
    const { artists } = this.state;
    const { ticket } = this.state;
    const Toggle = this.state;
    const isToggle = this.state;
    return (
      <div className="festival">
        <Navbar />;{/* box festival : image en background et nom festoch */}
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
            <p className="details"> Need more details ? </p>
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
              src="https://loire.envie.org/wp-content/uploads/sites/5/2018/04/2017-05-04-Icone-Lieu-charte-ERA.png"
              alt="location"
            />
            <p className="text-icone"> {festivals.city}</p>
          </div>

          <div className="icone-texte">
            <img
              className="image-icone"
              src="https://cdn.pixabay.com/photo/2016/06/29/21/11/calendar-icon-1487803_960_720.png"
              alt="date"
            />
            <p className="text-icone">
              {festivals.startDate} {festivals.endDate}
            </p>
          </div>
          <div className="icone-texte">
            <img
              className="image-icone"
              src="https://cdn.pixabay.com/photo/2017/06/17/04/17/purchasing-2411136_960_720.png"
              alt="price"
            />
            <p className="text-icone">{ticket.price} € </p>
          </div>
        </div>
        {/* -------fin partie icones -------- */}
        {/* le lineup */}
        <div className="lineUp">
          {' '}
          {artists.map((artist) => (
            <span> {artist.name} </span>
          ))}
          <span>Nasrat </span>
          <span>Patrick Sebastien </span>
          <span>Queen.B</span>
          <span>Moi </span>
          <span>Grosse Resta </span>
          <span>quelquun </span>
          <span>Wejdene</span>
          <span>Rammstein</span>
        </div>
        {/* package festival (box ticket) */}
        <div className="cardsPack">
          {tickets.map((pack) => (
            <div
              className="packCadre"
              onMouseEnter={this.handleMouse}
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

                {isToggle.isToggle ? (
                  <div className="moreInfo">
                    <p>{pack.date}</p>
                    <p>{pack.price}€</p>

                    {/* lien vers la résa  */}
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
