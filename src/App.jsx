import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import PageStyle from './components/PageStyle/PageStyle';
import PaymentPage from './components/PaymentPage/PaymentPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pageStyle/:idStyle" component={PageStyle} />
        <Route path="/PaymentPage" component={PaymentPage} />
      </Switch>
    </div>
  );
}

export default App;
