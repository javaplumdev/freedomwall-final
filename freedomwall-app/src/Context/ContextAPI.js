import React, { useState, useEffect, createContext } from 'react';
import { db } from '../firebase-file/firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export const Posts = createContext();

export function Context({ children }) {
	const [users, setUsers] = useState([]);

	const usersCollectionReference = collection(db, 'user-posts');

	const PostContent = async (title, content) => {
		await addDoc(usersCollectionReference, {
			title: title,
			content: content,
		});
		window.location.reload();
	};

	useEffect(() => {
		const getUsers = async () => {
			const data = await getDocs(usersCollectionReference);

			setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		getUsers();
	}, []);

	return (
		<Posts.Provider value={({ PostContent }, [users])}>
			{children}
		</Posts.Provider>
	);
}
