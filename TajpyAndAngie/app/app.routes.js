/// <reference path="../Scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="../Scripts/typings/angularjs/angular-route.d.ts"/>
var TajpyAndAngie;
(function (TajpyAndAngie) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
            $routeProvider.when("/home", {
                controller: "TajpyAndAngie.controllers.tsDemoController",
                templateUrl: "/app/views/playlist.html",
                controllerAs: "playList"
            });
            $routeProvider.otherwise({ redirectTo: "/home" });
        };
        Routes.$inject = ["$routeProvider"];
        return Routes;
    }());
    TajpyAndAngie.Routes = Routes;
})(TajpyAndAngie || (TajpyAndAngie = {}));
//# sourceMappingURL=app.routes.js.map