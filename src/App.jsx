import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import PageStyle from './components/PageStyle/PageStyle';
<<<<<<< HEAD
import Style from './components/PageStyle/Style';
// import PaymentPage from './components/PaymentPage/PaymentPage';
=======
import NavBar from './components/Reusable/Navbar';
import Style from './components/PageStyle/Style';
>>>>>>> 1d8c945268e5d7668075abdd272b25cdcf7ba2d6

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/style/:id" component={Style} />
        <Route path="/PageStyle" component={PageStyle} />
<<<<<<< HEAD
        {/* <Route path="/PaymentPage" component={PaymentPage} /> */}
=======
>>>>>>> 1d8c945268e5d7668075abdd272b25cdcf7ba2d6
      </Switch>
    </div>
  );
}

export default App;
