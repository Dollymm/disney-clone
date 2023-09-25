import axios from "axios";
const movieBaseUrl="https://api.themoviedb.org/3"
const api_key = '92a7eba4df1975dbde46aa87d11496ec';
const movieByGenereBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=92a7eba4df1975dbde46aa87d11496ec'

// Corrected URL with '=' in the parameter assignment
const getTrendingVideos = axios.get(`${movieBaseUrl}/trending/movie/day?api_key=${api_key}`);
 const getMovieByGenrelId=(id)=>axios.get(movieByGenereBaseURL+"&with_genres=+id")

export default {
    getTrendingVideos,
    getMovieByGenrelId
}
