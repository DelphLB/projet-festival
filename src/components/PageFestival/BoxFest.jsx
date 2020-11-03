import React, { Component } from 'react';
import axios from 'axios';
import '../CSS/festivals/BoxFest.css';
import PropTypes from 'prop-types';
// import { response } from 'express';

class BoxFest extends Component {
  constructor() {
    super();
    this.state = {
      festivals: {},
      tickets: {},
      artists: [],
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

    // axios
    //   .get(`https://api-festit-09-20.herokuapp.com/api/festivals`)
    //   .then((response) => console.log(response))
    //   .then((data) => this.setState(console.log(data)));

    axios
      .get(
        `https://api-festit-09-20.herokuapp.com/api//tickets/festivals/${idfestival}`
      )
      .then((response) => {
        this.setState({
          tickets: response.data[0],
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

  render() {
    const { festivals } = this.state;
    const { tickets } = this.state;
    const { artists } = this.state;
    const Toggle = this.state;
    return (
      <div className="festival">
        <div className="boxFestival">
          <h1 className="styleName">{festivals.name}</h1>
          <img src={festivals.image1} alt={festivals.name} />
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
            <p className="text-icone">{tickets.price} € </p>
          </div>
        </div>
        {/* -------fin partie icones -------- */}
        <p>
          {artists.map((artist) => (
            <div> {artist.name}</div>
          ))}
        </p>
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
