 (function () {

     angular.module('myApp', ['ui.router'])
         .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
             // for http request with session
             //  $httpProvider.defaults.withCredentials = true;
             var tempateURL = "views/template/template.html"; //Default Template URL
             $stateProvider
                 .state('home', {
                     url: "/",
                     templateUrl: "views/content/home.html",

                     controller: 'homeCtrl'
                 })

                 .state('about', {
                     url: '/about',
                     templateUrl: 'views/content/about.html',
                     controller: 'abtCtrl'
                 });

             $urlRouterProvider.otherwise("/");

             $locationProvider.html5Mode(true);
         });
 })();





 // // JavaScript Document
 // var myApp = angular.module('myApp', [
 //     'ui.router',
 //     'about.controller.js',
 //     'home.controller.js',
 //     'templateservice.js'

 // ]);

 // myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
 //     // for http request with session
 //     $httpProvider.defaults.withCredentials = true;
 //     $stateProvider
 //         .state('home', {
 //             url: "/",
 //             templateUrl: "views/content/home.html",
 //             controller: 'homeCtrl'
 //         })
 //         .state('about', {
 //             url: "/about",
 //             templateUrl: "views/content/about.html",
 //             controller: 'abtCtrl'
 //         });
 //     $urlRouterProvider.otherwise("/");
 //     $locationProvider.html5Mode(isproduction);
 // });

 // firstapp.config(function ($translateProvider) {
 //     $translateProvider.translations('en', LanguageEnglish);
 //     $translateProvider.translations('hi', LanguageHindi);
 //     $translateProvider.preferredLanguage('en');
 // });