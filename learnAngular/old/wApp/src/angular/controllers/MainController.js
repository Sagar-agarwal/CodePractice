myApp = angular.module('myApp');

myApp.controller('MainController', ['$scope', 'forecastService'
    ,function ($scope, forecastService){
        $scope.cityName = forecastService.cityName;

        $scope.$watch('cityName', function (){
            forecastService.cityName = $scope.cityName;
        });

    }]);