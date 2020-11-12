import React, { useState } from 'react';
import propTypes from 'prop-types';
import '../../../style/CSS/Contact/Form.css';
import useForm from './useForm';
import validate from './Validateinfo';

const Form = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  const [newsLetter, setNewletters] = useState(false);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Prénom
          <input
            type="text"
            id="name"
            name="name"
            placeholder="ex:Jean"
            value={values.name}
            onChange={handleChange}
          />
        </label>
        {errors.name && <p className="message">{errors.name}</p>}
        <label htmlFor="lastname">
          Nom
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="ex:Bernard"
            value={values.lastname}
            onChange={handleChange}
          />
        </label>
        {errors.lastname && <p className="message">{errors.lastname}</p>}

        <label htmlFor="email">
          E-mail
          <input
            type="email"
            id="email"
            name="email"
            placeholder="ex:jean@gmail.com"
            value={values.email}
            onChange={handleChange}
          />
        </label>

        {errors.email && <p className="message">{errors.email}</p>}

        <label htmlFor="question">
          Une Question ?
          <select className="select">
            <option>Comment me faire rembourser mon billet ?</option>
            <option>Est-ce-que je peut échanger mon billet ?</option>
            <option>Y&rsquo;a t-il des Assurances ?</option>
          </select>
        </label>
        <label htmlFor="comment">
          <textarea placeholder="Un commentaire ?" />
        </label>
        <label htmlFor="newletter" className="letter">
          S&rsquo;abonner aux newletters ?
          <input
            type="checkbox"
            id="newletter"
            className={setNewletters ? 'newlettersfalse' : 'newsletterstrue'}
            name="newletter"
            value={newsLetter}
            onChange={(e) => setNewletters(e.target.value)}
          />
        </label>
      </form>

      <button type="button" onClick={handleSubmit}>
        Envoyer
      </button>
    </div>
  );
};
Form.propTypes = {
  submitForm: propTypes.shape.isRequired,
};

export default Form;
