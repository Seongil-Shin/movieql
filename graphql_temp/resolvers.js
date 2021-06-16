import { getById, getMovies, addMovie, deleteMovie } from "./db";

const resolvers = {
   Query: {
      movies: () => getMovies(),
      movie: (_, args) => getById(args.id), //person(id:1) { name } 이런식으로 보낸다.
   },
   Mutation: {
      addMovie: (_, args) => addMovie(args.name, args.score),
      deleteMovie: (_, { id }) => deleteMovie(id),
   },
};

export default resolvers;
