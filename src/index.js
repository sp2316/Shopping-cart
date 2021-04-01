import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  firebase from '@firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD6Mf9pan8hY6tbgzAycetnym6XUUNKHpE",
  authDomain: "cart-1e272.firebaseapp.com",
  projectId: "cart-1e272",
  storageBucket: "cart-1e272.appspot.com",
  messagingSenderId: "95281992202",
  appId: "1:95281992202:web:013deb203b4aaa07fb05f3"
};
//initialize firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
