(function (){

    var eventsApp = angular.module("eventsApp");

    eventsApp.controller("MainController", ["$scope", function ($scope){
        $scope.message = "hello World!";
    }]);

}());