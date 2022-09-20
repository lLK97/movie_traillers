// const API_KEY = '504b85f6fe0a10a9c7f35945e14e7ddf';

// const requests = {
// 	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
// 	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
// 	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
// 	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
// 	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
// 	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
// 	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
// 	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
// 	fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
// };
const TOKEN_API = '8qlOkxz4wq';

const requests = {
	fetchTrending: `/trending/all/${TOKEN_API}`,
	fetchNetflixOriginals: `/category/all/${TOKEN_API}`,
	fetchTopRated: `/rating/${TOKEN_API}`,
	fetchActionMovies: `/category/Action/${TOKEN_API}`,
	fetchComedyMovies: `/category/Comedy/${TOKEN_API}`,
	fetchHorrorMovies: `/category/Horror/${TOKEN_API}`,
	fetchRomanceMovies: `/category/Romance/${TOKEN_API}`,
	fetchDocumentaries: `/category/Documentary/${TOKEN_API}`,
	fetchSearch: `/search/${TOKEN_API}`
};

export default requests;
