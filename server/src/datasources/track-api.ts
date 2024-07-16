import { RESTDataSource } from "@apollo/datasource-rest";
import { TrackModel, AuthorModel, ModuleModel } from "../models";

export class TrackAPI extends RESTDataSource{
    baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

    // returnS tracks
    getTracksForHome() {
        return this.get<TrackModel[]>('tracks');
      }

    //returns author using id
    getAuthor(authorId: string) {
        return this.get<AuthorModel>(`author/${encodeURIComponent(authorId)}`);
      }

      //returns a track using id
    getTrack(trackId: string) {
        return this.get<TrackModel>(`track/${trackId}`);
      }

      //returns a module for a certain track
    getTrackModules(trackId: string){
      return this.get<ModuleModel[]>(`track/${trackId}/modules`);
    }

    incrementTrackViews(trackId: string) {
      return this.patch<TrackModel>(`track/${trackId}/numberOfViews`);
    }
}
