import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../style/CSS/Home/BoxStyle.css';

class BoxStyle extends Component {
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
          <div className="pageStyle_box">
            <Link
              to={`/pageStyle/${style.idstyle}`}
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '54px',
              }}
            >
              <div
                className="insideStyleBox"
                style={{
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(${style.image})`,
                }}
              >
                <div className="titleBox">
                  <div className="titleStyleBox">
                    <div className="styleName">
                      <p className="pName">{style.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default BoxStyle;
