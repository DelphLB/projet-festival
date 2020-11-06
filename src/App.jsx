import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import BoxFest from './components/PageFestival/BoxFest';
import PageStyle from './components/PageStyle/PageStyle';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pageStyle/:idStyle" component={PageStyle} />
        <Route path="/festivals/:idfestival" component={BoxFest} />
      </Switch>
    </div>
  );
}

export default App;
