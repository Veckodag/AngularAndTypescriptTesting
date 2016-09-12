module TajpyAndAngie.Inerfaces {
    
    export interface IPlaylistService {
        getPlayList: () => Array<ITrack>;
    }

    export interface ITrack {
        title: string;
        artist: string;
        rating: number;
    }
}