import { getMovies, getMovie, getSuggestions, getHousePrices } from "./db";

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
    prices: (_, { pnu, stdrYear }) => getHousePrices(pnu, stdrYear)
  }
};

export default resolvers;
