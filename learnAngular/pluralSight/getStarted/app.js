var app = angular.module('app', []);

app.controller('MainController', ["$scope", "github", "$interval", "$timeout", "$log", "$anchorScroll", "$location", 
    function ($scope, github, $interval, $timeout, $log, $anchorScroll, $location) {
    
    $scope.message = 'Hello World!!';
    $scope.username = 'angular';
    
    // DIRECTIVES

    $scope.search = function (username) {
        $log.info("Searching for" + username);
        github.getUser(username)
        .then(
            function(data){
                $scope.gitUser = data;
                github.getRepos($scope.gitUser)
                    .then(function (data){
                        $scope.repos = data;
                        $location.hash("userDetail");
                        $anchorScroll();
                        },
                    function(reason){
                        $scope.error = "Could not fetch user repos";
                    });
            },
            function (reason) {
                $scope.error = "Could not fetch user data";
            },
        );

        if(countdownInterval){
            $interval.cancel(countdownInterval);
        }        
    };

    // SERVICES
    $scope.countdown = 5;
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


