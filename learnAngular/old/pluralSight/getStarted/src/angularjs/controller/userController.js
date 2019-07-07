
var app = angular.module('app');

app.controller('userController', ["$scope", "github", "$routeParams", "$location",
    function ($scope, github, $routeParams, $location) {
    
    $scope.username = $routeParams.username;
    
    // DIRECTIVES

    github.getUser($scope.username)
    .then(
        function(data){
            $scope.gitUser = data;
            github.getRepos($scope.gitUser)
                .then(function (data){
                    $scope.repos = data;
                    },
                function(reason){
                    $scope.error = "Could not fetch user repos";
                });
        },
        function (reason) {
            $scope.error = "Could not fetch user data";
        },
    );

    $scope.goToRepo = function (username, repoName){
        $location.path("/repo/" + username + "/" + repoName);
    };

}]);


