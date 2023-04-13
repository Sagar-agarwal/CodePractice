myApp = angular.module('myApp');

myApp.controller('MainController', [ 'nameService','$scope', '$http', '$timeout', '$filter', '$location', '$log',
    function ( nameService, $scope, $http, $timeout, $filter, $location, $log){
        $scope.message = "Hello";
        $scope.name = 'Tony';
        $scope.twitterHandleName = '';
        $scope.twitterHandleMinChar = 4;

        $scope.toLowerCase = function (someString){
            return $filter('lowercase')(someString);
        }

        }]);