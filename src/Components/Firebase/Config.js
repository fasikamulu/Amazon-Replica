import {initializeApp} from 'firebase/app';
import {getAuth}  from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBllWfMiskUShZ3YtpKlcwNbPdwR7qewPk",
    authDomain: "clone-7aa58.firebaseapp.com",
    projectId: "clone-7aa58",
    storageBucket: "clone-7aa58.appspot.com",
    messagingSenderId: "466349323083",
    appId: "1:466349323083:web:0ca77c279880d8439deece",
    measurementId: "G-40W36P6QKM"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  export {auth };
