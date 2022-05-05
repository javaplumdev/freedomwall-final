import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAzFzIsoeiCAmcL7tY5Hg5-PWJmlUHN6gc',
	authDomain: 'freedom-wall-react-firebase.firebaseapp.com',
	projectId: 'freedom-wall-react-firebase',
	storageBucket: 'freedom-wall-react-firebase.appspot.com',
	messagingSenderId: '1003469909557',
	appId: '1:1003469909557:web:34901ccec520cf5ff34b7c',
	measurementId: 'G-F30D1LQDJ4',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
