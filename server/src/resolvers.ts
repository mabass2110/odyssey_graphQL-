import { Resolvers } from "./types";
export const resolvers: Resolvers = {
// returns an array of Tracks that will be used to populate
// the homepage grid of our web client

    Query : {
         // get all tracks, will be used to populate the homepage grid of our web client
        tracksForHome: (_, __, {dataSources}) => {
            return dataSources.trackAPI.getTracksForHome();
        }
    },

    Track : {

        author: ({authorID}, __ , {dataSources}) => {
            console.log(dataSources)
            return dataSources.trackAPI.getAuthor(authorID);
        }

    }
};