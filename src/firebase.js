import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 

const firebaseConfig = {
  apiKey: "AIzaSyBvD1tyuIp8MesMSqoViHJLtOlrKZIcyR8",
  authDomain: "clone-ee343.firebaseapp.com",
  projectId: "clone-ee343",
  storageBucket: "clone-ee343.appspot.com",
  messagingSenderId: "437165081893",
  appId: "1:437165081893:web:02897ba97a7ed5836a46cc",
  measurementId: "G-BLPPQ3QWL3"
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth()