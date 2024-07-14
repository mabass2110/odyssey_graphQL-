//TODO
import gql from "graphql-tag";

export const typeDefs = gql`
  
     type Query{
        "Get tracks for homepage grid"
         tracksForHome: [Track!]!

         "Get a single track"
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
        description: string;
   	  numberOfViews: number;

        "The track's complete array of Modules"
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