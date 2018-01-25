'use strict';
    
var eventsApp = angular.module('eventsApp');
    
eventsApp.controller('EventController',[ "$scope",

    function ($scope){
        $scope.event = {
            name: "Angular fundamentals",
            date: "24/01/2018",
            time: "00:00 am",
            location: {
                address: "google Headquarters",
                city: "Mountain View",
                province: "CA"
            },
            imageUrl: "src/img/angularjs-logo.png",
            sessions: [
                {
                    name: "Directives Masterclass"
                },
                {
                    name: "Scopes for fund & Profits"
                },
                {
                    name: "Well behaved Controllers"
                }
            ]
        };

    }]);