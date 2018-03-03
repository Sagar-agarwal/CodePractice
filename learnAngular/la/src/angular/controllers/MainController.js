myApp = angular.module('myApp');

myApp.controller('MainController', ['$scope', '$http', '$timeout', '$filter', '$location', '$log',
    function ($scope, $http, $timeout, $filter, $location, $log){
        $scope.message = "Hello";
        $scope.name = 'Tony';
        $scope.twitterHandleName = '';
        $scope.twitterHandleMinChar = 4;

        $scope.toLowerCase = function (someString){
            return $filter('lowercase')(someString);
        }

        $log.info($location.path());


        


    }]);