import { SplashScreen } from '@capacitor/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import allReducers from './reducers';

// const store = createStore(
//     allReducers,
//     composeWithDevTools()
// );

ReactDOM.render(<App />, document.getElementById('root'));
SplashScreen.hide();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
