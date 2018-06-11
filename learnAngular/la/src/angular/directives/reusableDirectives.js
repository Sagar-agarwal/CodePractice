/*
    ****    SCOPE overide symbols  ****

    @ text [interpolation - one way binding of text]
    = two way binding
    & allowing access to functions

*/




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