import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class PageStyle extends Component {
  constructor() {
    super();
    this.state = {
      listofStyles: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://api-festit-09-20.herokuapp.com/api/styles')
      .then((response) => this.setState({ listofStyles: response.data }));
  }

  render() {
    const { listofStyles } = this.state;

    return (
      <div>
        <p> Page Style </p>
        {listofStyles.map((style) => (
          <Link to={`/style/${style.idstyle}`}> {style.name} </Link>
        ))}
      </div>
    );
  }
}

export default PageStyle;
