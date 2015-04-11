/**
 * Created by yanning on 11/04/2015.
 */
'use strict';
angular
  .module('siteFrancoiseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]).config(['$stateProvider', '$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {

  $stateProvider
    .state('accueil', {
      url: '/home',
      views: {
        'sub@': {
          templateUrl: 'views/menu/menu.html',
          controller: 'menuCtrl'
        },
        'content@': {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        }
      }
    })
    .state('about', {
      url:'/about',
      views:{
        'sub@': {
          templateUrl: 'views/menu/menu.html',
          controller: 'menuCtrl'
        },
        'content@':{
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        }

      }

    })
    .state('videotheque', {
      url:'/videotheque',
      views:{
        'sub@': {
          templateUrl: 'views/menu/menu.html',
          controller: 'menuCtrl'
        },
        'content@':{
          templateUrl: 'views/videotheque/videotheque.html',
          controller: 'videothequeCtrl'
        }

      }

    })
    .state('audiotheque', {
      url:'/audiotheque',
      views:{
        'sub@': {
          templateUrl: 'views/menu/menu.html',
          controller: 'menuCtrl'
        },
        'content@':{
          templateUrl: 'views/audiotheque/audiotheque.html',
          controller: 'audiothequeCtrl'
        }

      }

    })
    .state('phototheque', {
      url:'/phototheque',
      views:{
        'sub@': {
          templateUrl: 'views/menu/menu.html',
          controller: 'menuCtrl'
        },
        'content@':{
          templateUrl: 'views/phototheque/phototheque.html',
          controller: 'photothequeCtrl'
        }

      }

    })
    .state('agenda', {
      url:'/agenda',
      views:{
        'sub@': {
          templateUrl: 'views/menu/menu.html',
          controller: 'menuCtrl'
        },
        'content@':{
          templateUrl: 'views/agenda/agenda.html',
          controller: 'agendaCtrl'
        }

      }

    })
    .state('contact', {
      url:'/contact',
      views:{
        'sub@': {
          templateUrl: 'views/menu/menu.html',
          controller: 'menuCtrl'
        },
        'content@':{
          templateUrl: 'views/contact/contact.html',
          controller: 'contactCtrl'
        }

      }

    });
  $urlRouterProvider.otherwise('main');
}]);
