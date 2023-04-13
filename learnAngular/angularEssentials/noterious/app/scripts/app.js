"use strict";

/**
 * @ngdoc overview
 * @name noteriousApp
 * @description
 * # noteriousApp
 *
 * Main module of the application.
 */
angular
  .module("noteriousApp", ["ngAnimate", "ngCookies", "ngResource", "ngRoute", "ngSanitize", "ngTouch"])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "views/main.html",
        controller: "MainCtrl",
        controllerAs: "main"
      })
      .when("/about", {
        templateUrl: "views/about.html",
        controller: "AboutCtrl",
        controllerAs: "about"
      })
      .otherwise({
        redirectTo: "/"
      });

    $locationProvider.hashPrefix("");
  });
