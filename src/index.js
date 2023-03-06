import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {store} from './store/index'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route index element={<App/>}/>
      </Routes>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
