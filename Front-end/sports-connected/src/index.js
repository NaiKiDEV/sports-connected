import React from 'react';
import ReactDOM from 'react-dom';
//import 'mdbreact/dist/css/mdb.css';
//import 'bootstrap-css-only/css/bootstrap.min.css';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import storeData from './configureStore'
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import '@fortawesome/fontawesome-free/css/all.min.css'; 




ReactDOM.render(
    <Provider store={storeData.store}>
        <PersistGate loading={null} persistor={storeData.persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
    , document.getElementById('root'));

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
