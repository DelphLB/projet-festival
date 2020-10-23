import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import PageStyle from './components/PageStyle/PageStyle';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/PageStyle" component={PageStyle} />
      </Switch>
    </div>
  );
}

export default App;
