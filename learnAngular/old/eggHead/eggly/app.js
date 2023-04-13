var app = angular.module('app', []);

app.controller('MainController', function ($scope, $http) {
    $scope.message = 'Hello World!!';

    $http.get("https://api.github.com/users/sagar-agarwal")
        .then(function(response){
            $scope.gitUser = response.data;
        }
        ,function (reason) {
            $scope.error = "Could not fetch user data";
        });

});


