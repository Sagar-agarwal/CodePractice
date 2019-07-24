var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "././src/pages/main.html",
            controller: "MainController"
        })
        .when("/second/:num", {
            templateUrl: "././src/pages/second.html",
            controller: "SecondController"
        });
});

myApp.controller("MainController", [
    "$scope",
    "$log",
    "$routeParams",
    function($scope, $log, $routeParams) {
        $scope.pageName = "first page";
    }
]);

myApp.controller("SecondController", [
    "$scope",
    "$log",
    "$routeParams",
    function($scope, $log, $routeParams) {
        $scope.pageName = $routeParams.num;
    }
]);
