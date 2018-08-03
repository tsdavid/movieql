import axios from "axios";
const BASE_URL = "https://yts.am/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  });
  return movies;
};

export const getMovie = async id => {
  const {
    data: {
      data: { movie }
    }
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id
    }
  });
  return movie;
};

export const getSuggestions = async id => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id
    }
  });
  return movies;
};

const BASIC_URL =
  "http://apis.data.go.kr/1611000/nsdi/ApartHousingPriceService/";
const PriceAttr_URL = `${BASIC_URL}attr/getApartHousingPriceAttr?`;
const Key_info =
  "WIgXu0zd1Gc2cl3iTHqMt2GX3xKdWNLLvC6ICMV%2F7G1Ib3AhBoj9wWFdndhFwYEXYMC3anOsbvKbftHC75QgkQ%3D%3D";
const BASIC_API = `${PriceAttr_URL}ServiceKey=${Key_info}`;

export const getHousePrices = async (pnu, stdrYear) => {
  const {
    data: {
      data: { prices }
    }
  } = await axios(BASIC_API, {
    params: {
      pnu,
      stdrYear
    }
  });
  return prices;
};
