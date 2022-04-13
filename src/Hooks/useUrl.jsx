import { axios } from '../Config';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { urlKeys } from './query-keys-factory';

/** GET '/url/resolve/{userID}&{tinyUrl}'
 *
 * @param {String} userID: uid from Firebase Auth
 * @param {String} tinyUrl: the shortened url
 * @returns data
 */
const resolveUrl = async ({ userID, tinyUrl }) => {
	const { data } = axios.get(
		`/url/resolve/userID=${userID}&tinyUrl=${tinyUrl}`
	);
	return data;
};

/** Hook to wrap the above query
 *
 * @returns Formatted response object (refer to useQuery documentation)
 *
 * Usage:
 *
 * import { useResolveUrl } from '{sourcePath}/Hooks';
 *
 * **inside the useLogic hook or Functional Component**
 *
 * const { data, status, error } = useResolveUrl({user.user.uid, tinyUrl});
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
export function useResolveUrl() {
	return useQuery(urlKeys.all, resolveUrl);
}

/** GET '/url/getMultiUrls/{userID}&{pageNumber}'
 *
 * @param {String} userID: uid from Firebase Auth
 * @param {String} pageNumber: index for pagination (starts at 1)
 * @returns data
 */
const getAllUrls = async ({ userID, pageNumber }) => {
	const { data } = axios.get(
		`/url/getMultiUrls/userID=${userID}&pageNumber=${pageNumber}`
	);
	return data;
};

/** Hook to wrap the above query
 *
 * @returns Formatted response object (refer to useQuery documentation)
 *
 * Usage:
 *
 * import { useGetAllUrls } from '{sourcePath}/Hooks';
 *
 * **inside the useLogic hook or Functional Component**
 *
 * const { data, status, error } = useGetAllUrls({user.user.uid, pageNumber});
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
export function useGetAllUrls() {
	return useQuery(urlKeys.all, getAllUrls);
}

/** POST '/url/shorten'
 *
 * @param {String} userID: uid from Firebase Auth
 * @param {String} originalUrl: the url to shorten
 * @param {String?} prefix: the customized prefix
 * @returns data
 */
const shortenUrl = async ({ userID, originalUrl, prefix }) => {
	const { data } = axios.post('/url/shorten', { userID, originalUrl, prefix });
	return data;
};

/** Hook to wrap the above query
 *
 * @returns Mutation object (refer to useMutation documentation)
 *
 * Usage:
 *
 * import { useShortenUrl } from '{sourcePath}/Hooks';
 *
 * **inside the useLogic hook or Functional Component**
 *
 * const urlShortenMutation = useShortenUrl();
 *
 * const onClickToShortenUrl = () => {
 *      if (urlToShorten != '' || urlToShorten != Null) {
 *          urlShortenMutation.mutate(
 *              { userID: user.user.uid, originalUrl: urlToShorten, prefix },
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
export function useShortenUrl() {
	const queryClient = useQueryClient();

	return useMutation(shortenUrl, {
		onSuccess: () => {
			queryClient.invalidateQueries(urlKeys.all);
			return queryClient.refetchQueries({ stale: true });
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

/** PUT /url/delete/{userID}&{tinyUrl}
 *
 * @param {String} userID: uid from Firebase Auth
 * @param {String} tinyUrl: the shortened URL
 * @returns data
 */
const deleteShortenedUrl = async ({ userID, tinyUrl }) => {
	const { data } = axios.put(`/url/delete/userID${userID}&tinyUrl=${tinyUrl}`);
	return data;
};

/**
 * Hook to wrap the above query
 * @returns Mutation object (refer to useMutation documentation)
 *
 * Usage:
 *
 * import { useDeleteShortenedUrl } from '{sourcePath}/Hooks';
 *
 * **inside the useLogic hook or Functional Component**
 *
 * const deleteShortenedUrlMutation = useDeleteShortenedUrl();
 *
 * const onClickToDeleteUrl = () => {
 *      if (urlToDelete != '' || urlToDelete != Null) {
 *          deleteShortenedUrlMutation.mutate(
 *              { userID: user.user.uid, tinyUrl: urlToDelete },
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
export function useDeleteShortenedUrl() {
	const queryClient = useQueryClient();

	return useMutation(deleteShortenedUrl, {
		onSuccess: () => {
			queryClient.invalidateQueries(urlKeys.all);
			return queryClient.refetchQueries({ stale: true });
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
