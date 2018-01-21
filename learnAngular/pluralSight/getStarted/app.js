var app = angular.module('app', []);

app.controller('MainController', function ($scope, $http) {
    $scope.message = 'Hello World!!';
    

    $scope.search = function (username) {
        $http.get("https://api.github.com/users/" + username)
        .then(function(response){
            $scope.gitUser = response.data;
            $http.get($scope.gitUser.repos_url)
                .then(function (response){
                    $scope.repos = response.data;
                },
                function(reason){
                    $scope.error = "Could not fetch user repos";
                });
        },
        function (reason) {
            $scope.error = "Could not fetch user data";
        });
    };



    

});


