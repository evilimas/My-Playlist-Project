import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAc35dYvyOqL6AEQAeSgxPreBYYIH--n2s',
  authDomain: 'my-playlist-f9022.firebaseapp.com',
  projectId: 'my-playlist-f9022',
  storageBucket: 'my-playlist-f9022.appspot.com',
  messagingSenderId: '792740653532',
  appId: '1:792740653532:web:e8138961dbebd7916f0719',
};

//init firebase

firebase.initializeApp(firebaseConfig);

//init services

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp, projectStorage };
