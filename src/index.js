import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}> <App /></Provider>);

// we are provider to wrap the whole app
// and to use the store anywhere through out the app


// installation - redux
// react-redux --save react-redux like this