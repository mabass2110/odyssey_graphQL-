# README

## Overview

This repository provides a GraphQL server implementation using Apollo Server and TypeScript. The server integrates with a REST API to fetch data about tracks, authors, and modules. It offers queries for retrieving track information and mutations for updating track views.

## Project Structure

- `src/datasources/trackapis.ts`: Contains the `TrackAPI` class that handles communication with the REST API.
- `src/context.ts`: Defines the `DataSourceContext` type for managing the server's data sources.
- `src/index.ts`: Initializes and starts the Apollo Server.
- `src/models.ts`: Defines TypeScript types for `TrackModel`, `AuthorModel`, and `ModuleModel`.
- `src/resolvers.ts`: Contains GraphQL resolvers for handling queries and mutations.
- `src/schema.ts`: Defines the GraphQL schema using `gql`.
- `src/codegen.ts`: Configuration for GraphQL code generation.

## Getting Started

### Prerequisites

- Node.js (>=14.x)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mabass2110/odyssey_graphQL-
   cd odyssey_graphQL-
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Server

1. Start the server:

   ```bash
   npm start
   # or
   yarn start
   ```

   The server will start and listen on a port (default: 4000). It will output the URL where the server is running.

2. Access the GraphQL Playground at the provided URL to interact with the GraphQL API.

### Code Generation

This project uses `graphql-codegen` for generating TypeScript types based on the GraphQL schema. To generate types, run:

```bash
npm run codegen
# or
yarn codegen
```

## Project Details

### Data Sources

- `TrackAPI`: A REST data source that provides methods for fetching tracks, authors, and modules, as well as updating track views.

### Resolvers

- **Queries:**
  - `tracksForHome`: Retrieves a list of tracks for the homepage.
  - `track`: Fetches a specific track by its ID.

- **Mutations:**
  - `incrementTrackView`: Increments the view count for a specific track.

- **Track Resolvers:**
  - `author`: Fetches the author of a track.
  - `modules`: Fetches the modules associated with a track.

### Schema

- **Queries:**
  - `tracksForHome`: Returns a list of tracks.
  - `track(id: ID!)`: Returns a specific track by ID.

- **Mutations:**
  - `incrementTrackView(id: ID)`: Increments the number of views for a track.

- **Types:**
  - `Track`: Represents a track with fields such as `id`, `title`, `author`, `thumbnail`, `length`, `modulesCount`, `description`, and `numberOfViews`.
  - `Author`: Represents an author with `id`, `name`, and `photo`.
  - `Module`: Represents a module with `id`, `title`, and `length`.

## Development

- **To run tests:** (Add instructions if tests are included)
- **To lint the code:** (Add instructions if linting is configured)

## Contributing

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License. 

## Contact

For questions or comments, please contact hfmabasso@gmail.com.
