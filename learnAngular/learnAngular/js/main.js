var myApp = angular.module('myApp', []);

myApp.controller('mainController', [ '$scope',   
    function ($scope){
        
        $scope.message = 'hello world!';
    }]);