import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/rootReducer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const ws = new WebSocket('ws://localhost:4000'); // change if necessary
const store = createStore(rootReducer, applyMiddleware(thunk));

ws.onclose = () => {
  console.log('connection has closed!');
};

ws.onopen = () => {
  console.log('connection has opened!');
};

ws.onmessage = (message) => {
  console.log(message);
};

ws.onerror = (e) => {
  console.log(e);
};

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
