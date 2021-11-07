'use-strict';

console.log('[AstroHub]: Initializing AstroHub Firebase...')
const firebase = require('firebase');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBa2eZ3orNkkOv_x0Dk7bGEAQGcEf82GNw',
  authDomain: 'astrohub-a302a.firebaseapp.com',
  databaseURL: 'https://astrohub-a302a-default-rtdb.firebaseio.com',
  projectId: 'astrohub-a302a',
  storageBucket: 'astrohub-a302a.appspot.com',
  messagingSenderId: '1072174932849',
  appId: '1:1072174932849:web:5ab681220d809fa63accd0',
  measurementId: 'G-5JCZ1JPWY9',
};
//console.log(firebase.apps.length)
try {
  firebase.initializeApp(firebaseConfig);
} catch {
  //nothing special here
}

function getCred(id, access) {
  console.log('[Firebase]: Getting user access token...')
  return firebase.auth.GoogleAuthProvider.credential(id, access);
}

export default { firebase: firebase, getCred: getCred };
