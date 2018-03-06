myApp = angular.module('myApp');

myApp.directive('twittResults', function (){
    return {
        restrict: 'AECM',
        templateUrl: 'src/angular/directives/twittResults.html',
        replace: true,
        scope: {
            data: '=data',
            func: '&'
        }
    }
});