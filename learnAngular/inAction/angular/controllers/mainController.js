var app = angular.module('app', []);

app.controller('MainController', ['$scope',
    function($scope){
        $scope.heading = 'This is a heading';
    }]);