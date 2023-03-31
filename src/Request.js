const key = process.env.API_KEY;

export const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
  requestPopular: `${BASE_URL}/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `${BASE_URL}/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `${BASE_URL}/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestHorror: `${BASE_URL}/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `${BASE_URL}/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestSearch: `${BASE_URL}/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=`,
};

export default requests;
