// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD270YrgkJScMIuZ-lp2fYT3eynHcRRRYo",
  authDomain: "proyecto-react-js24895.firebaseapp.com",
  projectId: "proyecto-react-js24895",
  storageBucket: "proyecto-react-js24895.appspot.com",
  messagingSenderId: "253649301104",
  appId: "1:253649301104:web:dbccf5b1c18401eaf24eb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);