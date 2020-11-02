import React, { Component } from 'react';
import axios from 'axios';
import '../CSS/festivals/BoxFest.css';
import PropTypes from 'prop-types';

class BoxFest extends Component {
  constructor() {
    super();
    this.state = {
      festivals: {},
      //   tickets: {},
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

    //  axios
    //   .get(
    //     `https://api-festit-09-20.herokuapp.com/api//tickets/festivals/${idfestival}`
    //   )
    //   .then((response) => {
    //     console.log(response);
    //     this.setState({
    //       tickets: response.data[0],
    //     });
    //   });

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
    //  const { tickets } = this.state;
    const { artists } = this.state;
    return (
      <div className="festival">
        <div
          className="boxFestival"
          //    styles={{ backgroundImage: `url(${festivals.image1})` }}
        >
          <h1 className="styleName">{festivals.name}</h1>
          <img src={festivals.image1} alt={festivals.name} />
        </div>
        <div className="descriptionFestival">
          <p className="descriptionText">
            {festivals.description}
            {artists.map((artist) => (
              <div> {artist.name}</div>
            ))}
          </p>
        </div>
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
