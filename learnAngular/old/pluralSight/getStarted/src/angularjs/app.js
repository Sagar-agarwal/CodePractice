(function (){
    var app = angular.module('app', ["ngRoute"]);

    app.config(function ($routeProvider){
        $routeProvider
            .when("/main", {
                templateUrl: "/src/htmlViews/main.html",
                controller: "MainController"
            })
            .when("/user/:username", {
                templateUrl: "src/htmlViews/user.html",
                controller: "userController"
            })
            .when("/repo/:username/:reponame",{
                templateUrl: "src/htmlViews/repo.html",
                controller: "repoController"
            })
            .otherwise({redirectTo: "/main"});
    });
}());
