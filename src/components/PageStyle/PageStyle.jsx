import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../CSS/PageStyle/PageStyle.css';
import Fade from 'react-reveal/Fade';

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
      <div className="pageStyle">
        {listofStyles.map((style) => (
          <Link
            to={`/style/${style.idstyle}`}
            style={{
              textDecoration: 'none',
              color: 'white',
              fontSize: '54px',
            }}
          >
            <Fade big duration={2200} delay={220}>
              <div className="styleBox">
                <div
                  className="insideStyleBox"
                  style={{
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: `url(${style.image})`,
                  }}
                >
                  <div className="titleBox">
                    <p className="titleStyleBox">{style.name}</p>
                  </div>
                </div>
              </div>
            </Fade>
          </Link>
        ))}
      </div>
    );
  }
}

export default PageStyle;
