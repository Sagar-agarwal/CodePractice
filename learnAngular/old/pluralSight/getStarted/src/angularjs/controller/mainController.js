
var app = angular.module('app');

app.controller('MainController', ["$scope","$interval", "$location", 
    function ($scope, $interval, $location) {
    
    
    $scope.username = 'angular';
    
    // DIRECTIVES

    $scope.search = function (username) {
        if(countdownInterval){
            $interval.cancel(countdownInterval);
            $scope.countdown = null;
        }
        $location.path("/user/" + username);        
    };

    // SERVICES
    $scope.countdown = 15;
    var decrementCountdown = function (){
        $scope.countdown -=1;

        if ($scope.countdown < 1){
            $scope.search($scope.username);
        }
    };
    var countdownInterval = null;
    function startCountdown (){
        countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    };

    startCountdown();

}]);


