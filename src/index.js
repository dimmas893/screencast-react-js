import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { RecoilRoot } from 'recoil';

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </React.StrictMode>



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
