import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../style/CSS/Admin/AdminPage.css';

const TicketForm = () => {
  const [input, setInput] = useState({});
  const [festivals, setFestivals] = useState([]);

  useEffect(() => {
    axios
      .get('https://api-festit-09-20.herokuapp.com/api/festivals')
      .then((res) => res.data)
      .then((data) => setFestivals(data));
  }, []);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    axios
      .post('https://api-festit-09-20.herokuapp.com/api/tickets', {
        ...input,
      })
      .then((response2) => console.log(response2))

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="ticketform">
        <h2> Tickets </h2>
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
          name="type"
          onChange={(e) => handleChange(e)}
          placeholder="Type"
        />

        <input
          name="date"
          onChange={(e) => handleChange(e)}
          placeholder="Date"
        />

        <input
          name="price"
          onChange={(e) => handleChange(e)}
          placeholder="Price"
        />

        <select name="soldOut" onChange={(e) => handleChange(e)}>
          <option value="">Sold Out</option>
          <option value="false">false</option>
          <option value="true">true</option>
        </select>

        <select name="id_festival" onChange={(e) => handleChange(e)}>
          <option value="">--Please choose a festival--</option>
          {festivals.map((festival) => (
            <option value={festival.idfestival}>
              Name:{festival.name}, Id:{festival.idfestival}
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

export default TicketForm;
