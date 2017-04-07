 (function () {

     angular.module('myApp', ['ui.router'])
         .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
             // for http request with session
             $httpProvider.defaults.withCredentials = true;

             $stateProvider
                 .state('home', {
                     url: "/",
                     templateUrl: "views/content/home.html",
                     controller: 'homeCtrl'
                 })
                 //  .state('form', {
                 //      url: "/form",
                 //      templateUrl: "views/template.html",
                 //      controller: 'FormCtrl'
                 //  })
                 .state('about', {
                     url: '/about',
                     templateUrl: 'views/template.html',
                     controller: 'abtCtrl'
                 });

             $urlRouterProvider.otherwise("/");

             $locationProvider.html5Mode(true);
         });
 })();