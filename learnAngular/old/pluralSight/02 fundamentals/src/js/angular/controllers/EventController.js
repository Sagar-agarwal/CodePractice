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
                    name: "Directives Masterclass",
                    creatorName: "Bob smith",
                    duration: "1 hr",
                    level: "Advance",
                    abstract: "In this session you'll learn in's and out's of Directives",
                    upVoteCount: 0
                },
                {
                    name: "Scopes for fund & Profits",
                    creatorName: "Jay walker",
                    duration: "3 hr",
                    level: "Intermidiate",
                    abstract: "In this session you'll get to know about scope",
                    upVoteCount: 0
                },
                {
                    name: "Well behaved Controllers",
                    creatorName: "Keeanu Reevs",
                    duration: "2 hr",
                    level: "Basic",
                    abstract: "In this session you'll learn basis of Controllers",
                    upVoteCount: 0
                }
            ]
        };

    }]);