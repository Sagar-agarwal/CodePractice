var myApp = angular.module('myApp');

myApp.controller('MainAppViewController', [ '$scope', '$log'
    ,function ($scope, $log){

        $scope.contoller = 'MainAppViewController';
        $scope.mainAppView = 'This is a view';

}]);