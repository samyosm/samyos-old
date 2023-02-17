// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: 'AIzaSyCB3wVx0Rk5Z0AWEKObwVDnpy9OoQRvbpA',

  authDomain: 'tooltastic-fbc6d.firebaseapp.com',

  projectId: 'tooltastic-fbc6d',

  storageBucket: 'tooltastic-fbc6d.appspot.com',

  messagingSenderId: '964495010848',

  appId: '1:964495010848:web:8589f95b082c4880802045',

  measurementId: 'G-C3GP2BZQC9'

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const fdb = getFirestore(app);