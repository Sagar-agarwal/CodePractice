(function(){

    var module = angular.module("app");
    module.factory('github', ['$http', 
        function ($http){

            var getUser = function (username){
                return $http.get("https://api.github.com/users/" + username)
                            .then(function (response){
                                return response.data;
                            });
            };

            var getRepos = function (gitUser){
                return $http.get(gitUser.repos_url)
                            .then(function (response){
                                return response.data;
                            });
            };

            var getRepoDetails = function (username, reponame){
                var repo;
                var repoURL = "https://api.github.com/repos/" + username + "/" + reponame;
                return $http.get(repoURL)
                            .then(function (response){
                                repo =  response.data;
                                return $http.get(repoURL + "/contributors");
                            })
                            .then(function (response){
                            repo.contributors = response.data;
                            return repo;
                            });
                            

            };

            return {
                getUser: getUser,
                getRepos: getRepos,
                getRepoDetails: getRepoDetails,
            };
        }
    ]);

}());