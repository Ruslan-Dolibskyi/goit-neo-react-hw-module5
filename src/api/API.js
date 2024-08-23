import axios from 'axios';

const API_KEY = '93c1bd10c2a7085bc7151089e227fa63';
const BASE_URL = 'https://api.themoviedb.org/3';
const BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2MxYmQxMGMyYTcwODViYzcxNTEwODllMjI3ZmE2MyIsIm5iZiI6MTcyNDI1MjcyMC4xMzI4NzYsInN1YiI6IjY2YzVmZjhkZDBhYzBkNmZmNzJkNTExZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FpBaJ7vn8sQOjood5NwIcl1AcII0cDw5yPA3Xag8J4g';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
    },
});

export const getTrendingMovies = async () => {
    const response = await api.get(`/trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
};

export const searchMovies = async (query) => {
    const response = await api.get(`/search/movie?query=${query}&api_key=${API_KEY}`);
    return response.data.results;
};

export const getMovieDetails = async (movieId) => {
    const response = await api.get(`/movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
};

export const getMovieCast = async (movieId) => {
    const response = await api.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
    return response.data.cast;
};

export const getMovieReviews = async (movieId) => {
    const response = await api.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
    return response.data.results;
};