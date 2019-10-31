import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCdoXGgQg4jGEbI_zC368SOU4TeSuBN6yw",
  authDomain: "todoist-b1b79.firebaseapp.com",
  databaseURL: "https://todoist-b1b79.firebaseio.com",
  projectId: "todoist-b1b79",
  storageBucket: "todoist-b1b79.appspot.com",
  messagingSenderId: "168880806172",
  appId: "1:168880806172:web:cec7097ed935bb30c0c2d9"
  //measurementId: "G-7PD9F9H7CQ"
});

export { firebaseConfig as firebase };
