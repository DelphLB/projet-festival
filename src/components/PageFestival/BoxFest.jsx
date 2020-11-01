import React, { Component } from 'react';
import axios from 'axios';
import '../CSS/festivals/BoxFest.css';

class BoxFest extends Component {
  constructor() {
    super();
    this.state = {
      festivals: {},
    };
  }

  componentDidMount() {
    const { idfestival } = this.props.match.params; //ici pour le params j'imagine que c'est pas this mais.pagestyle ???
    axios
      .get(`https://api-festit-09-20.herokuapp.com/api/festivals/${idfestival}`)
      //   .get(`https://api-festit-09-20.herokuapp.com/api/festivals/`)
      .then((response) => {
        this.setState({
          festivals: response.data[0],
        });
      });
  }

  render() {
    const { festivals } = this.state;

    return (
      <div className="festival">
        <div
          className="boxFestival"
          // styles={{ backgroundImage: `url(${festivals.image1})` }}
        >
          <h1 className="styleName">{festivals.name}</h1>

          <img src={festivals.image1} alt={festivals.name} />
        </div>
        <div className="descriptionFestival">
          <p className="descriptionText">{festivals.description}</p>
        </div>
      </div>
    );
  }
}

export default BoxFest;
