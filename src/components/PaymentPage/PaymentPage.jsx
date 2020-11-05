import React, { useState } from 'react';
import ExpiryDateInput from 'credit-card-expiry-date';
import '../CSS/PaymentPage/PaymentPage.css';
import * as FaIcons from 'react-icons/fa';
import Navbar from '../Reusable/NavBar/Navbar';
import Footer from '../Reusable/Footer/Footer';

function PaymentPage() {
  const [expiryDate, setExpiryDate] = useState({
    value: '',
  });

  const handleExpiryDate = (date) => {
    setExpiryDate({
      value: date,
    });
  };
  return (
    <div className="paymentPage">
      <Navbar />
      <h1>Recapitulatif d&rsquo;achat</h1>
      <div className="row">
        <div className="person">
          Civilité
          <span className="input">
            <select id="genre" name="genre">
              <option value="Monsieur">Monsieur</option>
              <option value="Mademoiselle">Mademoiselle</option>
              <option value="Madame">Madame</option>
            </select>
          </span>
          Votre prénom
          <span className="input">
            <input
              type="firstName"
              id="firstName"
              name="firstName"
              className="input-field"
            />
          </span>
          Votre nom
          <span className="input">
            <input
              type="lastName"
              id="lastName"
              name="lastName"
              className="input-field"
            />
          </span>
          Votre adresse mail
          <span className="input">
            <input type="mail" id="mail" name="mail" className="input-field" />
          </span>
          Confirmer votre adresse mail
          <span className="input">
            <input type="mail" id="mail" name="mail" className="input-field" />
          </span>
          Téléphone
          <span className="input">
            <input
              type="phoneNumber"
              id="phoneNumber"
              name="phoneNumber"
              className="input-field"
            />
          </span>
          <div className="adress">
            <h3>Détail de l&rsquo;adresse</h3>
            Adresse
            <span className="input">
              <input
                type="address"
                id="address"
                name="address"
                className="input-field"
              />
            </span>
            Complément d&rsquo;adresse
            <span className="input">
              <input
                type="address"
                id="address"
                name="address"
                className="input-field"
              />
            </span>
            Ville
            <span className="input">
              <input
                type="city"
                id="city"
                name="city"
                className="input-field"
              />
            </span>
            Code Postal
            <span className="input">
              <input
                type="postalCode"
                id="postalCode"
                name="PostalCode"
                className="input-field"
              />
            </span>
          </div>
        </div>

        <div className="row">
          <div className="card">
            <h3>Nombre de tickets</h3>
            <select id="tickets" name="tickets" className="input-field">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <h4>Détail du paiement</h4>
            <div htmlFor="cname">
              Choix de la carte
              <div className="icon-container">
                <FaIcons.FaCcVisa className="visa" />
                <FaIcons.FaApplePay className="apple" />
              </div>
            </div>
            Numéro de carte
            <span className="input">
              <input
                type="cardNumber"
                id="cardNumber"
                name="cardNumber"
                className="input-field"
              />
            </span>
            <p>Date d&rsquo;expiration</p>
            <div className="date">
              <ExpiryDateInput
                label="Expiry Date"
                onChange={(date) => handleExpiryDate(date)}
                value={expiryDate}
                disabled={false}
                onBlur={(date) => handleExpiryDate(date)}
              />
            </div>
            Numéro CCV
            <span className="input">
              <input type="ccv" id="ccv" name="ccv" className="input-field" />
            </span>
          </div>
        </div>
      </div>
      <div className="button">
        <input type="submit" value="Procéder au paiement" className="btn" />
      </div>
      <Footer />
    </div>
  );
}

export default PaymentPage;
