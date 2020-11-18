import React, { useState } from 'react';
import '../../style/CSS/Contact/Contact.css';
import Navbar from '../Reusable/NavBar/Navbar';
import Footer from '../Reusable/Footer/Footer';
import Form from './contactcomponents/Form';
import FormSuccess from './contactcomponents/FormSuccess';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="contact">
      <Navbar />
      {!isSubmitted ? <Form submitForm={submitForm} /> : <FormSuccess />}
      <Footer />
    </div>
  );
};

export default Contact;
