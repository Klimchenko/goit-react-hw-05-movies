import Axios from 'axios';

const API_KEY = '310104a842cef863cd1b5982de07ee1b';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const trendingMovieApi = async page => {
  const response = await Axios.get(
    `${BASE_URL}trending/movie/week?api_key=${API_KEY}&page=${page}`,
  );
  return response.data;
};

export const searchMovieApi = async (query, page) => {
  const response = await Axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
  );
  return response.data;
};

export const movieDetailsApi = async movieId => {
  const response = await Axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`,
  );
  return response.data;
};

export const movieCreditsApi = async movieId => {
  const response = await Axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`,
  );
  return response.data;
};

export const movieReviewsApi = async (movieId, page) => {
  const response = await Axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&page=${page}`,
  );
  return response.data;
};
