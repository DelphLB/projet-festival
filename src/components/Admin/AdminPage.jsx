import React from 'react';
import FestForm from './FestForm';
import TicketForm from './TicketForm';
import ArtistForm from './ArtistForm';
import Navbar from '../Reusable/NavBar/Navbar';
import '../../style/CSS/Admin/AdminPage.css';

function AdminPage() {
  return (
    <div className="allAdmin">
      <Navbar />
      <div className="AdminPage">
        <FestForm />
        <TicketForm />
        <ArtistForm />
      </div>
    </div>
  );
}

export default AdminPage;
