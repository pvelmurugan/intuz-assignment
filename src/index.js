import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Home from './Components/Dashboard/Home';
//import configureStore from "./Redux/Store";

// const store = configureStore();

ReactDOM.render(
  //<Provider store={store}>
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Home} />
    </Switch>
  </Router>
  //</Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
