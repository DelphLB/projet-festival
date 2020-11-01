import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import PageFestival from './components/PageFestival/PageFestival';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/festivals/:idfestival" component={PageFestival} />
      </Switch>
    </div>
  );
}

export default App;
