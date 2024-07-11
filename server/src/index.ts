import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from '@apollo/server/standalone';
import { typeDefs } from "./schema";

const startApolloServer = async () => {
    const server = new ApolloServer({ typeDefs });
    const { url } = await startStandaloneServer(server);
    console.log(`
        🚀  Server is running!
        📭  Query at ${url}
      `);
}

startApolloServer()