
var app = angular.module('app');

app.controller('repoController', ["$scope", "github", "$routeParams",
    function ($scope, github, $routeParams) {
    
    $scope.username = $routeParams.username;
    $scope.reponame = $routeParams.reponame;
    
    // DIRECTIVES

    github.getRepoDetails($scope.username, $scope.reponame)
    .then(
        function(data){
            $scope.gitUserRepo = data;
        },
        function(reason){
            $scope.error = "Could not fetch user repos";
        });

}]);


