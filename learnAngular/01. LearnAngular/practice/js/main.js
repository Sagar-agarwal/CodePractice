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

myApp.service("nameService", function() {
    var self = this;

    this.name = "John Dow";
    this.nameLength = function() {
        return self.name.length;
    };
});

myApp.controller("MainController", [
    "$scope",
    "$log",
    "$routeParams",
    "nameService",
    function($scope, $log, $routeParams, nameService) {
        $scope.name = nameService.name;

        $scope.$watch("name", function() {
            nameService.name = $scope.name;
            $log.log($scope.name);
        });
    }
]);

myApp.controller("SecondController", [
    "$scope",
    "$log",
    "$routeParams",
    "nameService",
    function($scope, $log, $routeParams, nameService) {
        $scope.name = nameService.name;
    }
]);
