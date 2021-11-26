import { firebase } from 'firebase/app';
import firestore from "firebase/firestore"; 
import "firebase/storage" 


const firebaseConfig = {
    apiKey: "AIzaSyDRajE2sZi7UN1l8mWziNxJit2LQawA_1g",
    authDomain: "ttwitterclonee.firebaseapp.com",
    projectId: "ttwitterclonee",
    storageBucket: "ttwitterclonee.appspot.com",
    messagingSenderId: "892147942558",
    appId: "1:892147942558:web:4fafc8351762599f88a78f",
    measurementId: "G-E1DHYYL9CR"
  }; 

  const fb = firebase.initializeApp(firebaseConfig); 

  export const db = fb.firestore()

  const storage = firebase.storage()

  export {storage, firebase as default } 

  

 