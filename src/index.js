import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterCustom from './router';
import "./style/style.scss";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterCustom/>
  </React.StrictMode>
);


