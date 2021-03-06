import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store";
import { Provider } from "react-redux";
import { fetchData } from "./actions";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Call the function from redux that fetches all profiles from trettons API
fetchData();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
