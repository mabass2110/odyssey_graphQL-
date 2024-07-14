import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from '@apollo/server/standalone';
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { TrackAPI } from "./datasources/track-api";


const startApolloServer = async () => {
    const server = new ApolloServer({ 
        typeDefs,resolvers
    });

    //initializes the server and returns dataSourcede from server's configuration object
    const { url } = await startStandaloneServer(server, {
      context: async () => {
        const { cache } = server;
        return {
          dataSources: {
            trackAPI: new TrackAPI({cache})
          }
        }
      }
    });
    console.log(`
        🚀  Server is running!
        📭  Query at ${url}
      `);
}

startApolloServer()