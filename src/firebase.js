import firebase, { firestore } from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyATowo5NGsQ8iV1IfuqLiA8CJfLuu5DDas',
	authDomain: 'imessage-clone-d2448.firebaseapp.com',
	databaseURL: 'https://imessage-clone-d2448.firebaseio.com',
	projectId: 'imessage-clone-d2448',
	storageBucket: 'imessage-clone-d2448.appspot.com',
	messagingSenderId: '884385755710',
	appId: '1:884385755710:web:3e0519b4f4718b6ea9976f',
	measurementId: 'G-86F6ER6YLG',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
