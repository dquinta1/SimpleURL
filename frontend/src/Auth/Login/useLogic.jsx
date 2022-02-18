import { useEffect, useState } from 'react';

export const useLogic = () => {
	const [password, setPassword] = useState(null);
	const [passwordIsValid, setPasswordIsValid] = useState(false);
	const [passwordErrorText, setPasswordErrorText] = useState(null);

	const passwordRegEx = RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);

	const useValidatePassword = () => {
		return useEffect(() => {
			if (password != null && !passwordRegEx.test(password)) {
				setPasswordIsValid(false);
				setPasswordErrorText('Invalid Password');
			} else {
				setPasswordIsValid(true);
				setPasswordErrorText(null);
			}
		}, [password]);
	};

	const [email, setEmail] = useState(null);
	const [emailIsValid, setEmailIsValid] = useState(false);
	const [emailErrorText, setEmailErrorText] = useState(null);

	const emailRegExp = RegExp(
		/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
	);

	const useValidateEmail = () => {
		return useEffect(() => {
			if (email != null && !emailRegExp.test(email)) {
				setEmailIsValid(false);
				setEmailErrorText('Invalid email');
			} else {
				setEmailIsValid(true);
				setEmailErrorText(null);
			}
		}, [email]);
	};

    const handleSubmit = (event) => {
		//TODO: replace the code below and impmlement this function to call Auth API

		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});
	};

	return {
		email,
		emailIsValid,
		emailErrorText,
		password,
		passwordIsValid,
		passwordErrorText,
		setEmail,
		useValidateEmail,
		setPassword,
		useValidatePassword,
        handleSubmit,
	};
};
