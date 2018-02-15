var myApp = angular.module('myApp', []);

myApp.controller('MainController', ['$scope', '$http',
    function ($scope, $http){
        $scope.message = "Hello World!";


        console.log($scope);
    }]);