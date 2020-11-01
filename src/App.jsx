import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
// import PageFestival from './components/PageFestival/PageFestival';
import BoxFest from './components/PageFestival/BoxFest';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/festivals/:idfestival" component={BoxFest} />
      </Switch>
    </div>
  );
}

export default App;
