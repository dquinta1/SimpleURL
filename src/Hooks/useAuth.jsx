import { auth } from '../Config';
import { useRegisterInDB } from './useUser';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	updateProfile,
} from 'firebase/auth';
import {useState} from "react";

export const useAuth = () => {
	const [user, setUser] = useState({});
	const registerInDBMutation = useRegisterInDB();

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
	});

	const register = async (email, password, firstName, lastName) => {
		let message = "success";
		try {
			var location;
			fetch('https://api.ipregistry.co/?key=tryout')
				.then(function (response) {
					return response.json();
				})
				.then(function (payload) {
					location = payload.location.country.name;
					console.log(location);
				});

			// register on Firebase Auth
			const user = await createUserWithEmailAndPassword(auth, email, password);
			console.log(user);

			// update its displayName
			await updateProfile(user, {displayName: `${firstName} ${lastName}`});
			await user.user.reload();
			console.log(user);

			// create user data on GCP database
			registerInDBMutation.mutate(
				{
					userID: user.user.uid,
					displayName: user.user.displayName,
					type: 'Free',
					emailAddress: email,
					location,
					language: navigator.language,
					createdTime: new Date(user.user.metadata.creationTime).getMilliseconds.toString(),
				},
				{
					onSuccess: () => {
						/*TODO: handle success operation if necessary (reset form fields, etc...)*/
					},
					onError: () => {
						/*TODO: handle failure operation if necessary (show error message, etc...)*/
					},
				}
			);
			return user;
		} catch (error) {
			message =  error.message;
		}
		return message;
	};

	const login = async (email, password) => {
		let message = "success";
		try {
			const user = await signInWithEmailAndPassword(auth, email, password);
			console.log(user);
			return user;
		} catch (error) {
			console.log(error.message);
			message = error.message;

		}
		return message;
	};

	const logout = async () => {
		await signOut(auth);
	};

	return {
		user,
		register,
		login,
		logout,
	};
};

/** Usage Example:
 *
 * import { useAuth } from '<sourcePath>/Hooks';
 *
 * const {
 *      user,
 *      register,
 *      login,
 *      logout,
 * } = useAuth();
 *
 * const onClickLogin = () => {
 *      login(email, password);
 * }
 *
 * Disclaimer:
 *  This hook currently rethrows any errors Firebase returns
 *  in its response. It is the UI's responsibility to handle
 *  how to provide feedback for the user when these errors
 *  happen.
 * **/
