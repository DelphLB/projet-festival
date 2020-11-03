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
    };
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

  render() {
    const { festivals } = this.state;
    const { tickets } = this.state;
    const { artists } = this.state;
    return (
      <div className="festival">
        <Navbar />;{/* box festival : image en background et nom festoch */}
        <div
          className="boxFestival"
          //    styles={{ backgroundImage: `url(${festivals.image1})` }}
        >
          <h1 className="styleName">{festivals.name}</h1>
          <img src={festivals.image1} alt={festivals.name} />
        </div>
        <div className="descriptionFestival">
          <p className="descriptionText">{festivals.description}</p>
        </div>
        {/* le lineup */}
        <div className="lineUp">
          {' '}
          {artists.map((artist) => (
            <div> {artist.name}</div>
          ))}
        </div>
        {/* package festival (box ticket) */}
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
