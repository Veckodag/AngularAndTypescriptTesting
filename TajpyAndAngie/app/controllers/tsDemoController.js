/// <reference path="../services/playlistService.ts"/>
/// <reference path="../../Scripts/typings/angularjs/angular.d.ts"/>
var TajpyAndAngie;
(function (TajpyAndAngie) {
    var Controllers;
    (function (Controllers) {
        var TSDemoController = (function () {
            function TSDemoController(playListService) {
                var _this = this;
                this.getFavorites = function () {
                    _this.favorites = _this.playListService.getPlayList();
                };
                this.playListService = playListService;
            }
            TSDemoController.$inject = ["TajpyAndAngie.Services.PlayListService"];
            return TSDemoController;
        }());
        Controllers.TSDemoController = TSDemoController;
        angular.module("TajpyAndAngie").controller("TajpyAndAngie.controllers.tsDemoController", TSDemoController);
    })(Controllers = TajpyAndAngie.Controllers || (TajpyAndAngie.Controllers = {}));
})(TajpyAndAngie || (TajpyAndAngie = {}));
//# sourceMappingURL=tsDemoController.js.map