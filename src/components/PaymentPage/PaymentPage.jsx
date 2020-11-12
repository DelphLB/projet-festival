import React from 'react';

import '../../style/CSS/PaymentPage/PaymentPage.css';
import * as FaIcons from 'react-icons/fa';
import Navbar from '../Reusable/NavBar/Navbar';
import Footer from '../Reusable/Footer/Footer';

function PaymentPage() {
  return (
    <div className="paymentPage">
      <Navbar />
      <h1>Récapitulatif d&rsquo;achat</h1>
      <div className="row">
        <div className="person">
          Civilité
          <select id="genre" name="genre">
            <option value="Monsieur">Monsieur</option>
            <option value="Mademoiselle">Mademoiselle</option>
            <option value="Madame">Madame</option>
          </select>
          Votre prénom
          <input
            type="firstName"
            id="firstName"
            name="firstName"
            className="input-field"
            placeholder="Edward"
          />
          Votre nom
          <input
            type="lastName"
            id="lastName"
            name="lastName"
            className="input-field"
            placeholder="Elric"
          />
          Votre adresse mail
          <input
            type="mail"
            id="mail"
            name="mail"
            className="input-field"
            placeholder="ex : fma@gmail.com"
          />
          Confirmer votre adresse mail
          <input type="mail" id="mail" name="mail" className="input-field" />
          Téléphone
          <input
            type="phoneNumber"
            id="phoneNumber"
            name="phoneNumber"
            className="input-field"
          />
          <h3>Détail de l&rsquo;adresse</h3>
          Adresse
          <input
            type="address"
            id="address"
            name="address"
            className="input-field"
          />
          Complément d&rsquo;adresse
          <input
            type="address"
            id="address"
            name="address"
            className="input-field"
            placeholder="Resembool"
          />
          Ville
          <input type="city" id="city" name="city" className="input-field" />
          Code Postal
          <input
            type="postalCode"
            id="postalCode"
            name="PostalCode"
            className="input-field"
          />
        </div>

        <div className="card">
          <h3>Nombre de tickets</h3>
          <select id="tickets" name="tickets" className="input-ticket">
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
              <FaIcons.FaCcMastercard className="mastercard" />
              <FaIcons.FaApplePay className="apple" />
              <FaIcons.FaCcPaypal className="paypal" />
            </div>
          </div>
          Numéro de carte
          <input
            type="cardNumber"
            id="cardNumber"
            name="cardNumber"
            className="input-field"
            maxLength="16_characters"
          />
          <p>Date d&rsquo;expiration</p>
          <div className="date">
            <select name="expireMM" id="expireMM">
              <option value="">Mois</option>
              <option value="01">Janvier</option>
              <option value="02">Fevrier</option>
              <option value="03">Mars</option>
              <option value="04">Avril</option>
              <option value="05">Mai</option>
              <option value="06">Juin</option>
              <option value="07">Juillet</option>
              <option value="08">Aout</option>
              <option value="09">Septembre</option>
              <option value="10">Octobre</option>
              <option value="11">Novembre</option>
              <option value="12">Decembre</option>
            </select>
            <select name="expireYY" id="expireYY">
              <option value="">Année</option> <option value="10">2020</option>
              <option value="11">2021</option>
              <option value="12">2022</option>
              <option value="12">2023</option>
            </select>{' '}
          </div>
          Numéro CCV
          <input
            type="ccv"
            id="ccv"
            name="ccv"
            className="input-field"
            maxLength="3_characters"
          />
        </div>

        <button type="button" className="btn">
          Procéder au paiement
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default PaymentPage;
