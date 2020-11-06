import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../CSS/PageStyle/PageStyle.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

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
    Aos.init({ duration: 250 });
  }

  render() {
    const { listofStyles } = this.state;

    return (
      <div className="pageStyle">
        {listofStyles.map((style) => (
          <div className="pageStyle_box">
            <Link
              to={`/style/${style.idstyle}`}
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '54px',
              }}
            >
              <div data-aos="fade-in">
                <div
                  className="insideStyleBox"
                  style={{
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: `url(https://cdn.pixabay.com/photo/2018/03/02/10/03/wildlife-3192772_960_720.jpg)`,
                  }}
                >
                  <div className="titleBox">
                    <p className="titleStyleBox">
                      <p className="styleName">{style.name}</p>
                    </p>
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

export default PageStyle;
