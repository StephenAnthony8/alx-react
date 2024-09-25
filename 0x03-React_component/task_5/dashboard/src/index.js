import React from 'react';
import ReactDOM from 'react-dom/client';
import WithLogging from './HOC/WithLogging';
import App from './App/App';

/* function yeet() {
  console.log("Yeet");
} */
const root = ReactDOM.createRoot(document.getElementById('root'));
const ReturnValue = WithLogging(App);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

