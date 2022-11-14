import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './reduxtoolkit/redux/store'
import Application from './reduxtoolkit/Application';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={ store }>
      <Application />
    </Provider>
  </StrictMode>
);

reportWebVitals();
