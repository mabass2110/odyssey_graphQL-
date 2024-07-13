import { RESTDataSource } from "@apollo/datasource-rest";

export class TrackAPI extends RESTDataSource{
    baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

    // returnS tracks
    getTracksForHome() {
        return this.get('tracks');
      }

    //returns author using id
    getAuthor(authorId: string) {
        return this.get(`author/${encodeURIComponent(authorId)}`);
      }
}
