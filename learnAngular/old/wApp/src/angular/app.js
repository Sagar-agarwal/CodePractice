var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

// openWeather app api = 5b3dc04e65e095db6a447e636756a434 ;
// ?APPID=YOURAPIKEY

myApp.config(function ($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'src/angular/views/main.html',
        controller: 'MainController'
    })
    .when('/cityWeatherData',{
        templateUrl: 'src/angular/views/cityWeatherData.html',
        controller: 'CityWeatherData'
    });
});