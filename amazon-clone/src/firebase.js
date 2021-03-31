import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBj1zWnPL1AMV0qgx9OW7Q7ALXzNNyAfdQ",
  authDomain: "clone-mcpavao.firebaseapp.com",
  projectId: "clone-mcpavao",
  storageBucket: "clone-mcpavao.appspot.com",
  messagingSenderId: "1089279624544",
  appId: "1:1089279624544:web:773764e1e5433852058a05",
  measurementId: "G-MEJ9FC193Z"
});

const db = firebase.firestore();

export { db }