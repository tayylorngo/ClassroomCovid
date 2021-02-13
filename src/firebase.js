import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCxosxGM84afcKYiGIPNzx2NZ0lRkS2yr4",
    authDomain: "hackathon2021-93794.firebaseapp.com",
    projectId: "hackathon2021-93794",
    storageBucket: "hackathon2021-93794.appspot.com",
    messagingSenderId: "699871580219",
    appId: "1:699871580219:web:d6c7b32ff6c97a244bcc1e",
    measurementId: "G-T1PH26VPQ3"
};

let fire = firebase.initializeApp(firebaseConfig);

export default fire;