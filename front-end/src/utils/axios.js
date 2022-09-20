import axios from 'axios';

/** base url to make request to the themoviedatabase */

const instance = axios.create({
	// baseURLIMG: 'https://api.themoviedb.org/3',
	baseURL: 'http://localhost:5000/'
});

// instance.get('/foo-bar');
// https://api.themoviedb.org/3/foo-bar

export default instance;
