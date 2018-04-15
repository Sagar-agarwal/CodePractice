myApp = angular.module('myApp');

myApp.service('forecastService', [function (){
    var self = this;

    this.cityName = 'Delhi';
}]);