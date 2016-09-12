((): void => {
    var app = angular.module("TajpyAndAngie", ["ngRoute"]);
    app.config(TajpyAndAngie.Routes.configureRoutes);
})();