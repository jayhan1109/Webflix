// Your web app's Firebase configuration
import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCNz3eKKHhLH2xBMA7eviaMgAt8Juh5ipM",
  authDomain: "webflix-24b55.firebaseapp.com",
  databaseURL: "https://webflix-24b55.firebaseio.com",
  projectId: "webflix-24b55",
  storageBucket: "webflix-24b55.appspot.com",
  messagingSenderId: "674226892374",
  appId: "1:674226892374:web:a7ef16363d830f797d95f7",
  measurementId: "G-XQ0C26G1MQ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
