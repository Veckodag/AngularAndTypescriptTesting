/// <reference path="../services/playlistService.ts"/>
/// <reference path="../../Scripts/typings/angularjs/angular.d.ts"/>

module TajpyAndAngie.Controllers {

    export class TSDemoController {

        playListService: TajpyAndAngie.Inerfaces.IPlaylistService;
        static $inject = ["TajpyAndAngie.Services.PlayListService"];

        constructor(playListService: TajpyAndAngie.Inerfaces.IPlaylistService) {
            this.playListService = playListService;
        }

        favorites: Array<TajpyAndAngie.Inerfaces.ITrack>;
        getFavorites = () => {
            this.favorites = this.playListService.getPlayList();
        }
    }

    angular.module("TajpyAndAngie").controller("TajpyAndAngie.controllers.tsDemoController", TSDemoController);
}
