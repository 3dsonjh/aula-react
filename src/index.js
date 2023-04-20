import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqbKm_j8BMgYYnd8vAMvUdjCj9vkUdae0",
  authDomain: "aval-imovel.firebaseapp.com",
  projectId: "aval-imovel",
  storageBucket: "aval-imovel.appspot.com",
  messagingSenderId: "856611254677",
  appId: "1:856611254677:web:0f7d9104c80b2d8989869c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
