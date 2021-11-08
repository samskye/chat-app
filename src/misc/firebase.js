import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyCBUEQMg6o0tUQcgzwCycaoEmuCtalX9so',
  authDomain: 'chat-web-app-31511.firebaseapp.com',
  projectId: 'chat-web-app-31511',
  storageBucket: 'chat-web-app-31511.appspot.com',
  messagingSenderId: '1035040854007',
  appId: '1:1035040854007:web:0d07f2841f56874b5d28f2',
  databaseURL:
    'https://chat-web-app-31511-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

const app = firebase.initializeApp(config);
// returns an instance of firebase application
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
