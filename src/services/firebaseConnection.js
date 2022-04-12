import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


let firebaseConfig = {
    apiKey: "AIzaSyDoMYFzxqJQMM-z31xBB3OgreE8unG20pE",
    authDomain: "systemcalls-67e93.firebaseapp.com",
    projectId: "systemcalls-67e93",
    storageBucket: "systemcalls-67e93.appspot.com",
    messagingSenderId: "1085403887004",
    appId: "1:1085403887004:web:0c2bbf8edb39ecd5fa0459",
    measurementId: "G-62CT4E9XVT"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}  

export default firebase;
