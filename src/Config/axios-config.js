import Axios from 'axios';

export const axios =  Axios.create({
	baseURL: 'http://www.<our-url>.com',
});