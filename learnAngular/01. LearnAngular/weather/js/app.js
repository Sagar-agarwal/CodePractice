var myApp = angular.module("myApp", ["ngRoute", "ngResource"]);

// Router
myApp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./../angular/views/home.html",
            controller: "homeController"
        })
        .when("/forecast", {
            templateUrl: "./../angular/views/forecast.html",
            controller: "forecastController"
        });
});

// SERVICES

myApp.service("cityService", function() {
    this.city = "";
});

myApp.service("weatherAPIService", function() {
    this.api_key = "6f43030fce3af524b108d19b18cd10cb";
});

// CONTROLLER
myApp.controller("homeController", [
    "$scope",
    "cityService",
    function($scope, cityService) {
        $scope.city = cityService.city;

        $scope.$watch("city", function() {
            cityService.city = $scope.city;
        });
    }
]);

myApp.controller("forecastController", [
    "$scope",
    "$resource",
    "cityService",
    "$log",
    "weatherAPIService",

    function($scope, $resource, cityService, $log, weatherAPIService) {
        $scope.city = cityService.city;
        $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/weather");
        $scope.weatherResults = $scope.weatherAPI.get({
            q: $scope.city,
            apiid: weatherAPIService.api_key
        });

        $log.log($scope.weatherResults);
    }
]);
