import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql_temp/resolvers";

const server = new GraphQLServer({
   typeDefs: "graphql/schema.graphql",
   resolvers: resolvers,
});

server.start(() => console.log("graph Ql server running"));
