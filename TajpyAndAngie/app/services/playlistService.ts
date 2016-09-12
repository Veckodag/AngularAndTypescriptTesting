/// <reference path="../interfaces/interfaces.ts"/>

module TajpyAndAngie.Services {

    export class PlayListService implements TajpyAndAngie.Inerfaces.IPlaylistService {
        httpService: ng.IHttpService;
        static $inject = ["$http"];

        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }

        getPlayList = () => {
            var res: Array<TajpyAndAngie.Inerfaces.ITrack> = [
                { title: "Numb", artist: "Linkin Park", rating: 4.9 },
                { title: "Fire Flies", artist: "Owl City", rating: 4.3 },
                { title: "Yellow", artist: "Coldplay", rating: 4.5 },
                { title: "Skyfall", artist: "Adele", rating: 4.6 },
                { title: "Firelight", artist: "Caligula's Horse", rating: 5 }
            ];
            return res;
        }
    }

    angular.module("TajpyAndAngie").service("TajpyAndAngie.Services.PlayListService", PlayListService);
}