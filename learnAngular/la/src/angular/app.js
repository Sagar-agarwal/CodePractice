/*
        *****   COMMON DIRECTIVES   *****

    @ ng-if
    @ ng-show       Displays the DOM element based on condition
    @ ng-hide       hides the DOM element based on condition
    @ ng-repeat     repeats the HTML elements based on data
    @ ng-cloak      Hides the binded elements until data is available for display

@ event based
    @ ng-click      Watch the click event

*/


var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider){

    $routeProvider
    .when('/', {
        templateUrl: 'src/angular/views/viewMain.html',
        controller: 'ViewMainController'
    })
    .when('/mainApp', {
        templateUrl: 'src/angular/views/mainAppView.html',
        controller: 'MainAppViewController'
    });
});



