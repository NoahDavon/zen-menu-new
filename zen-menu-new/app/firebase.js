import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: process.env.DBKey,

  authDomain: "zenmenu-71a7f.firebaseapp.com",

  projectId: "zenmenu-71a7f",

  storageBucket: "zenmenu-71a7f.appspot.com",

  messagingSenderId: "246725129317",

  appId: "1:246725129317:web:9380129b8cc1d72722428c",

  measurementId: "G-8Y7TXP2F63"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);