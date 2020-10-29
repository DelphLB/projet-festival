import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import PageStyle from './components/PageStyle/PageStyle';
import Style from './components/PageStyle/Style';
// import PaymentPage from './components/PaymentPage/PaymentPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/style/:id" component={Style} />
        <Route path="/PageStyle" component={PageStyle} />
        {/* <Route path="/PaymentPage" component={PaymentPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
