import React from 'react';
import axios from 'axios';

class PageStyle extends React.Component {
  componentDidMount() {
    axios
      .get('https://api-festit-09-20.herokuapp.com/api/styles')
      .then((response) => response.data);
  }

  render() {
    return (
      <div>
        <p> Page Style </p>
      </div>
    );
  }
}

export default PageStyle;
