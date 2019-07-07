myApp = angular.module('myApp');


myApp.controller('CityWeatherData', ['$scope', 'forecastService', '$resource', '$log'
    ,function ($scope, forecastService, $resource, $log){

        var apiKey = "5b3dc04e65e095db6a447e636756a434";
        var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?';

        $scope.cityName = forecastService.cityName;

        $scope.weatherAPI = $resource(apiUrl,
            {
                callback: "JSON_CALLBACK"
            },
            {
                get:{
                    method: "JSONP"
            }}
            );
        $scope.data = $scope.weatherAPI.get({q: $scope.cityName, appid: apiKey});
        $log.info($scope.data);

    }]);