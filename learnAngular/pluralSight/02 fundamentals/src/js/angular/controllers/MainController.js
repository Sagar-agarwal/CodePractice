(function (){

    var app = angular.module("app");

    app.controller("MainController", ["$scope", function ($scope){
        $scope.message = "hello World!";
    }]);

}());