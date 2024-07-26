import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Container from './children/Box.jsx';
import Header from './children/Header.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container>
      <Header />
    </Container>
  </React.StrictMode>
);
