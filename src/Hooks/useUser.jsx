import { axios } from '../Config';
import { useQuery, useMutation } from 'react-query';
import { userKeys } from './query-keys-factory';

/** GET '/user/getInfo/{userID}'
 *
 * @param {String} userID: uid from Firebase Auth
 * @returns data
 */
const getUser = async (userID) => {
	const { data } = axios.get(`/user/getInfo/${userID}`);
	return data;
};

/** Hook to wrap the above query
 *
 * @returns Formatted response object (refer to useQuery documentation)
 *
 * Usage:
 *
 * import { useGetUserInfo } from '{sourcePath}/Hooks';
 *
 * **inside the useLogic hook or Functional Component**
 *
 * const { data, status, error } = useGetUserInfo(userID);
 *
 * switch (status):
 *      case 'loading':
 *      ...do something
 *      case 'error':
 *      ...do something
 *      case 'success':
 *      ...do something
 *      default: // status = 'idle'
 *      ...do something
 */
export function useGetUserInfo() {
	return useQuery(userKeys.user, getUser);
}

/** POST '/user/register'
 *
 * @param {String} userID: uid from Firebase Auth
 * @param {String} displayName: user's First and Last Name
 * @param {String} type: user tier (Free by default)
 * @param {String} emailAddress: email used to sign up
 * @param {String} location: ISO country code
 * @param {String} language: browser's language
 * @param {String} createdTime: timestamp for user's signup in milliseconds
 * @returns data
 */
const registerInDB = async ({
	userID,
	displayName,
	type,
	emailAddress,
	location,
	language,
	createdTime,
}) => {
	const { data } = axios.post('/user/register', {
		userID,
		displayName,
		type,
		emailAddress,
		location,
		language,
		createdTime,
	});
	return data;
};

/*
* Hook to wrap the above query
 *
 * @returns Mutation object (refer to useMutation documentation)
 *
 * Usage:
 *
 * import { useAuth, useRegisterInDB } from '{sourcePath}/Hooks';
 *
 * **inside the useLogic hook or Functional Component**
 *
 * const [ user, register ] = useAuth();
 * const registerInDBMutation = useRegisterInDB();
 *
 * const onClickToSignUp = () => {
 *      await register(email, password);
 *      if (user != null) {
 *          registerInDBMutation.mutate(
 *              {
 *                  userID: user.user.uid,
 * 					displayName: user.user.displayName
 *		            type: 'Free',
 *		            emailAddress: email,
 *		            location,
 *		            language: navigator.language,
 *		            createdTime: new Date(user.user.metadata.creationTime),
 *              },
 *              {
 *                  onSuccess: () => handle success operation if necessary (reset form fields, etc...),
 *                  onError: () => handle failure operation if necessary (show error message, etc...),
 *              }
 *          )
 *      } else {
 *          throw error...
 *      }
 * }
*/
export function useRegisterInDB() {
	return useMutation(registerInDB, {
		onSuccess: () => {
			/*TODO: handle success*/
		},
		onError: () => {
			/*TODO: handle success*/
		},
		onSettled: () => {
			/*TODO: handle default*/
		},
		onMutate: () => {
			/*TODO: handle action at each mutation*/
		},
	});
}

/** POST '/user/upgrade/{userID}'
 *
 * @returns data
 */
 const upgradeUser = async ({ userID }) => {
	const { data } = axios.post(`/user/upgrade/userID=${userID}`);
	return data;
};

/** Hook to wrap the above query
 *
 * @returns Mutation object (refer to useMutation documentation)
 *
 * Usage:
 *
 * import { useUpgradeUser } from '{sourcePath}/Hooks';
 *
 * **inside the useLogic hook or Functional Component**
 *
 * const upgradeUserMutation = useUpgradeUser();
 *
 * const onClickToUpgrade = () => {
 *      if (user != null) {
 *          upgradeUserMutation.mutate(
 *              { user.user.uid },
 *              {
 *                  onSuccess: () => handle success operation if necessary (reset form fields, etc...),
 *                  onError: () => handle failure operation if necessary (show error message, etc...),
 *              }
 *          )
 *      } else {
 *          throw error...
 *      }
 * }
 */
export function useUpgradeUser() {
	return useMutation(upgradeUser, {
		onSuccess: () => {
			/*TODO: handle success*/
		},
		onError: () => {
			/*TODO: handle success*/
		},
		onSettled: () => {
			/*TODO: handle default*/
		},
		onMutate: () => {
			/*TODO: handle action at each mutation*/
		},
	});
}