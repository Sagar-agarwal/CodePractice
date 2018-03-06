myApp = angular.module('myApp');

myApp.controller('ViewMainController', ['$scope', '$log'
    ,function ($scope, $log){

        $scope.users = [
            {
            controller: 'ViewMainController',
            heading: '1 This would be a heading',
            para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic facilis adipisci fuga eos officia animi sapiente maxime molestias quis accusamus ducimus aut beatae possimus voluptatem dolorem modi placeat quia, perferendis.',
            input: ''
            },
            {
            controller: 'ViewMainController',
            heading: '2 This would be a heading',
            para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic facilis adipisci fuga eos officia animi sapiente maxime molestias quis accusamus ducimus aut beatae possimus voluptatem dolorem modi placeat quia, perferendis.',
            input: ''
            },
            {
            controller: 'ViewMainController',
            heading: '3 This would be a heading',
            para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic facilis adipisci fuga eos officia animi sapiente maxime molestias quis accusamus ducimus aut beatae possimus voluptatem dolorem modi placeat quia, perferendis.',
            input: ''
            },
            ];

        $scope.check = function (user){
            return 'this is a function string - ' + user.input;
        };

    }]);