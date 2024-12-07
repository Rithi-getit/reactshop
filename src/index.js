import React from 'react';
import ReactDOM from 'react-dom/client';
import OpenComponent from './openComponent'; 
import './openComponent.css'; 
import Categories from './categories.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OpenComponent />
    <Categories/>
  </React.StrictMode>
);
