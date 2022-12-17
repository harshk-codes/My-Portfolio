import React from 'react';
import ReactDOM from 'react-dom/client';

//importing app
import App from './App';

//stylesheet
import './App.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
