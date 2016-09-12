/// <reference path="../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../Scripts/typings/angularjs/angular-route.d.ts"/>

module TajpyAndAngie {
    export class Routes {
        static $inject = ["$routeProvider"];
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when("/home",
            {
                controller: "TajpyAndAngie.controllers.tsDemoController",
                templateUrl: "/app/views/playlist.html",
                controllerAs: "playList"
                });
            $routeProvider.otherwise({ redirectTo: "/home" });
        }
    }
}