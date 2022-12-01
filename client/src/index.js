import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import  'bootstrap/dist/css/bootstrap.min.css'
import { AuthProvider } from './context/auth.context';
// import CryptoContext from '../CryptoContext';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Router>
    <AuthProvider>
      {/* <CryptoContext> */}
      <App />
      {/* </CryptoContext> */}
      </AuthProvider>
    </Router>
  // </React.StrictMode>
);

