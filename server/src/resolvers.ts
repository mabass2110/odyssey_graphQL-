import { Resolvers } from "./types";

export const resolvers: Resolvers = {
    Query: {
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome();
        },
        track: (_, { id }, { dataSources }) => {
            return dataSources.trackAPI.getTrack(id);
        },
    },

    Mutation: {
        // increments a track's numberOfViews property
        incrementTrackView: (_,{id}, {dataSources}) => {
            const track = dataSources.trackAPI.incrementTrackViews(id);
            return{
                code: 200,
                success: true,
                message: `Successfully incremented number of views for track ${id}`,
                track,
            }
        }
    },

    Track: {
        author: ({ authorId }, _, { dataSources }) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
        // Add 'modules' resolver here
        modules: ({ id }, _, { dataSources }) => {
            return dataSources.trackAPI.getTrackModules(id);
        },
    },
};
