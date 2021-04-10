// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDSg3D9X8jv4uIuZfwWSyaCYhzzkeBYEuw",
    authDomain: "slack-clone-3a6c4.firebaseapp.com",
    projectId: "slack-clone-3a6c4",
    storageBucket: "slack-clone-3a6c4.appspot.com",
    messagingSenderId: "575281004522",
    appId: "1:575281004522:web:aa5e99ea36db0633837c93",
    measurementId: "G-KREE2RGNCB"
};

//
const firebaseApp=firebase.initializeApp(firebaseConfig);
//
const db=firebaseApp.firestore();
//
const auth=firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();
export {auth, provider,db};