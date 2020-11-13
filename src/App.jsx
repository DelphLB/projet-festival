import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Artiste from './components/PageArtiste/Artiste';
import BoxFest from './components/PageFestival/BoxFest';
import PageStyle from './components/PageStyle/PageStyle';
import PaymentPage from './components/PaymentPage/PaymentPage';
import Contact from './components/Contact/Contact';
import AdminPage from './components/Admin/AdminPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/style/:idStyle" component={PageStyle} />
        <Route path="/festivals/:idfestival" component={BoxFest} />
        <Route path="/artists" component={Artiste} />
        <Route path="/payment" component={PaymentPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/Admin" component={AdminPage} />
      </Switch>
    </div>
  );
}

export default App;
