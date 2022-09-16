// Importeert React
import React from 'react';

// Importeert React DOM
import ReactDOM from 'react-dom/client';

// Importeert app component
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
