import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// eslint-disable-next-line react/jsx-filename-extension
const root = ReactDOM.createRoot(
  document.getElementById('root'),
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/search" />
    </Routes>
  </BrowserRouter>,
);
