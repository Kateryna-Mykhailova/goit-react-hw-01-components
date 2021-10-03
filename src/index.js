import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

const element = React.createElement('div', { a: 5, children: 'Привет, мир' });
console.log(element);

ReactDOM.render(element, document.getElementById('root'));

let value = 'click';
const newBtn = <button type-button>{value}</button>;
console.log(newBtn);
