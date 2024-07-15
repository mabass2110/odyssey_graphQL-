//TODO
import gql from "graphql-tag";

export const typeDefs = gql`
  
     type Query{
        "Get tracks for homepage grid"
         tracksForHome: [Track!]!

         "Fetch a specific track, provided a track's ID"
         track(id: ID!): Track
     }

     type Mutation{
         incrementTrackViews(id: ID): IncrementTrackViews!
      
     }

     type IncrementTrackViews{

      "Similar to HTTP status code, represents the status of the mutation"
         code: Int!
         "Indicates whether the mutation was successful"
         success: Boolean!
         "Human-readable message for the UI"
         message: String!
         "Newly updated track after a successful mutation"
         track: Track
     
     
     }

     type IncrementTrackViewsResponse {
          "Similar to HTTP status code, represents the status of the mutation"
            code: Int!
            "Indicates whether the mutation was successful"
            success: Boolean!
            "Human-readable message for the UI"
            message: String!
            "Newly updated track after a successful mutation"
            track: Track


}



    "A track is a group of Modules that teaches about a specific topic"      
     type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
        description: String
   	  numberOfViews: Int
        modules: [Module!]!
    }
        "Author of a complete Track or a Module"
     type Author {
        id: ID!
        name: String!
        photo: String
        }

      "A Module is a single unit of teaching. Multiple Modules compose a Track"
      type Module {
      id: ID!
      "The Module's title"
      title: String!
      "The Module's length in minutes"
      length: Int
      }

      
    

      
`;