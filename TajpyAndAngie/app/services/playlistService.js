/// <reference path="../interfaces/interfaces.ts"/>
var TajpyAndAngie;
(function (TajpyAndAngie) {
    var Services;
    (function (Services) {
        var PlayListService = (function () {
            function PlayListService($http) {
                this.getPlayList = function () {
                    var res = [
                        { title: "Numb", artist: "Linkin Park", rating: 4.9 },
                        { title: "Fire Flies", artist: "Owl City", rating: 4.3 },
                        { title: "Yellow", artist: "Coldplay", rating: 4.5 },
                        { title: "Skyfall", artist: "Adele", rating: 4.6 },
                        { title: "Firelight", artist: "Caligula's Horse", rating: 5 }
                    ];
                    return res;
                };
                this.httpService = $http;
            }
            PlayListService.$inject = ["$http"];
            return PlayListService;
        }());
        Services.PlayListService = PlayListService;
        angular.module("TajpyAndAngie").service("TajpyAndAngie.Services.PlayListService", PlayListService);
    })(Services = TajpyAndAngie.Services || (TajpyAndAngie.Services = {}));
})(TajpyAndAngie || (TajpyAndAngie = {}));
//# sourceMappingURL=playlistService.js.map