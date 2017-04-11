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

             // use the HTML5 History API
             $locationProvider.html5Mode(false);
         });
 })();


 // preety url method by scotch
 // angular.module('myApp', ['ngRoute'])

 //     .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, $routeProvider) {

 //         $routeProvider
 //             .when('/', {
 //                 templateUrl: 'views/content/home.html',
 //                 controller: homeCtrl
 //             })
 //             .when('/about', {
 //                 templateUrl: 'views/content/about.html',
 //                 controller: abtCtrl
 //             });
 //         //  .when('/contact', {
 //         //      templateUrl: 'partials/contact.html',
 //         //      controller: mainController
 //         //  });

 //         // use the HTML5 History API
 //         $locationProvider.html5Mode(true);
 //     });

 // END preety url method by scotch

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