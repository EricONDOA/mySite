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
    .state('main', {
      url: '/home',
      views: {
        'content@': {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        }
      }
    })
    .state('about', {
      url:'/about',
      views:{
        'content@':{
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        }

      }

    })
    .state('videotheque', {
      url:'/videotheque',
      views:{
        'content@':{
          templateUrl: 'views/videotheque/videotheque.html',
          controller: 'videothequeCtrl'
        }

      }

    })
    .state('audiotheque', {
      url:'/audiotheque',
      views:{
        'content@':{
          templateUrl: 'views/audiotheque/audiotheque.html',
          controller: 'audiothequeCtrl'
        }

      }

    })
    .state('phototheque', {
      url:'/phototheque',
      views:{
        'content@':{
          templateUrl: 'views/phototheque/phototheque.html',
          controller: 'photothequeCtrl'
        }

      }

    })
    .state('agenda', {
      url:'/agenda',
      views:{
        'content@':{
          templateUrl: 'views/agenda/agenda.html',
          controller: 'agendaCtrl'
        }

      }

    })
    .state('contact', {
      url:'/contact',
      views:{
        'content@':{
          templateUrl: 'views/contact/contact.html',
          controller: 'contactCtrl'
        }

      }

    });
  $urlRouterProvider.otherwise('main');
}]);
