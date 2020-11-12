import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Artiste from './components/PageArtiste/Artiste';
import BoxFest from './components/PageFestival/BoxFest';
import PageStyle from './components/PageStyle/PageStyle';
import PaymentPage from './components/PaymentPage/PaymentPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pageStyle/:idStyle" component={PageStyle} />
        <Route path="/festivals/:idfestival" component={BoxFest} />
        <Route path="/artists" component={Artiste} />
        <Route path="/PaymentPage" component={PaymentPage} />
      </Switch>
    </div>
  );
}

export default App;
