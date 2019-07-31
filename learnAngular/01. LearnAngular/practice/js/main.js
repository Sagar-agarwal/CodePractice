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
    this.address = "111, North Avenue, NY, 123";

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
        $scope.example = "this is test";
        $scope.persons = [
            {
                name: "Jon Dow",
                address: "11, NY, 23"
            },
            {
                name: "Jon Dow",
                address: "11, NY, 23"
            },
            {
                name: "Jon Dow",
                address: "11, NY, 23"
            },
            {
                name: "Jon Dow",
                address: "11, NY, 23"
            }
        ];

        // $scope.person.name = nameService.name;
        // $scope.person.address = nameService.address;

        $scope.$watch("name", function() {
            nameService.name = $scope.name;
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

<<<<<<< Updated upstream
myApp.directive('searchResults', function (){
    return {
        restrict: 'AECM',
        templateUrl: './../src/directives/searchResults/searchResult.template.html',
        replace: true,
        scope: {
            personsObj: "=",
            example: "@"
        },
        compile: function (elem, attrs){
            console.log("elem: " + elem);
            console.log(`att: ${attrs}`);

            return {
                pre: function (scope, ele, attrs){
                    console.log(`Pre: scope: ${scope} ele: ${JSON.stringify(ele)} attrs: ${JSON.stringify(attrs)}`);
                },
                post: function (scope, ele, attrs){
                    console.log(`Post: scope: ${scope} ele: ${ele} attrs: ${attrs}`);
                }
            }
        },
    }
=======
myApp.directive("searchResult", function() {
    return {
        template: `<a class="list-group-item" href="#">
                        <h3 class="list-group-item-heading">Jon</h3>
                        <p class="list-group-item-text">Address here</p>
                    </a>`,
        replace: true
    };
>>>>>>> Stashed changes
});
