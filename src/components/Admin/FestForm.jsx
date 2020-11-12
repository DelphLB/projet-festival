import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../style/CSS/Admin/AdminPage.css';

const FestForm = () => {
  const [input, setInput] = useState({});
  const [styles, setStyles] = useState([]);
  const [styleId, setStyleId] = useState(null);

  useEffect(() => {
    axios
      .get('https://api-festit-09-20.herokuapp.com/api/styles')
      .then((res) => res.data)
      .then((data) => setStyles(data));
  }, []);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    axios
      .post('https://api-festit-09-20.herokuapp.com/api/festivals', {
        ...input,
      })
      .then(() => {
        let indexFestival;
        let idFestival;

        axios
          .get('https://api-festit-09-20.herokuapp.com/api/festivals')
          .then((res) => {
            indexFestival = res.data.length - 1;
            idFestival = res.data[`${indexFestival}`].idfestival;

            axios
              .post(
                `https://api-festit-09-20.herokuapp.com/api/festivals/${idFestival}/styles/${Number(
                  styleId
                )}`
              )
              .then((response2) => console.log(response2));
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSelect = (e) => {
    setStyleId(e.target.value);
  };

  return (
    <div>
      <div className="festform">
        <h2> Festivals </h2>
        <input
          name="name"
          onChange={(e) => handleChange(e)}
          placeholder="Name"
        />
        <input
          name="description"
          onChange={(e) => handleChange(e)}
          placeholder="Description"
        />
        <input
          name="city"
          onChange={(e) => handleChange(e)}
          placeholder="City"
        />
        <input
          name="country"
          onChange={(e) => handleChange(e)}
          placeholder="Country"
        />
        <input
          name="startDate"
          onChange={(e) => handleChange(e)}
          placeholder="Start Date"
        />
        <input
          name="endDate"
          onChange={(e) => handleChange(e)}
          placeholder="End Date"
        />
        <input
          name="image1"
          onChange={(e) => handleChange(e)}
          placeholder="Image"
        />
        <input
          name="url_video"
          onChange={(e) => handleChange(e)}
          placeholder="Video"
        />

        <select name="style" onChange={(e) => handleSelect(e)}>
          <option value="">--Please choose a style--</option>
          {styles.map((style) => (
            <option value={style.idstyle}>
              Name:{style.name}, Id:{style.idstyle}
            </option>
          ))}
        </select>
        <div className="bouttonCenter">
          <button type="submit" onClick={() => handleClick()}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FestForm;
