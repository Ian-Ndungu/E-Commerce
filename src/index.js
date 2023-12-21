import React from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/reducers/store';
import { Provider } from 'react-redux';

// Use either BrowserRouter or createRoot, not both
const root = createRoot(document.getElementById('root'));

root.render(
  
      <Provider store={store}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <App />
        </React.Suspense>
      </Provider>
   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
