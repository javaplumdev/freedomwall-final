import React, { useState, useEffect, createContext } from 'react';
import { db } from '../firebase-file/firebase-config';
import toast from 'react-hot-toast';

import {
	collection,
	getDocs,
	addDoc,
	query,
	orderBy,
} from 'firebase/firestore';

export const Posts = createContext();
const usersCollectionReference = collection(db, 'user-posts');

let dateToday = new Date().toLocaleDateString();

var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();

// Check whether AM or PM
var newformat = hours >= 12 ? 'PM' : 'AM';

// Find current hour in AM-PM Format
hours = hours % 12;

// To display "0" as "12"
hours = hours ? hours : 12;
minutes = minutes < 10 ? '0' + minutes : minutes;

export function goToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}

// For posting
export const PostContent = async (title, content, color) => {
	if (title === '' || content === '') {
		toast.error('Please enter some missing fields');
	} else {
		await addDoc(usersCollectionReference, {
			title: title,
			content: content,
			color: color,
			dateAndTime: `${dateToday} ${hours}:${minutes}${newformat}`,
		});
		toast.success('Posted successfully!');
		window.location.reload();
	}
};

export function Context({ children }) {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getUsers = async () => {
			const data = await getDocs(
				query(usersCollectionReference, orderBy('dateAndTime', 'desc'))
			);

			setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		getUsers();
	}, []);

	return <Posts.Provider value={[users]}>{children}</Posts.Provider>;
}
