/**
 * Created by yanning on 11/04/2015.
 */
'use strict';

angular.module('siteFrancoiseApp')
  .controller('menuCtrl', ['$scope', '$rootScope','$state', function ($scope, $rootScope,$state) {
    $scope.menuItems = [{
      'name': 'Accueil',
      'urlName': 'accueil',
      'class':'glyphicon glyphicon-home',
      'active':'accueil'
    },
      {
        'name': 'Audiothèque',
        'urlName': 'audiotheque',
        'class':'glyphicon glyphicon-music',
        'active':'audiotheque'
      },
      {
        'name': 'Vidéothèque',
        'urlName':'videotheque',
        'class':'glyphicon glyphicon-film',
        'active':'videotheque'
      },
      {
        'name': 'Photothèque',
        'urlName':'phototheque',
        'class':'glyphicon glyphicon-picture',
        'active':'phototheque'
      },
      {
        'name': 'Agenda',
        'urlName':'agenda',
        'class':'glyphicon glyphicon-calendar',
        'active':'agenda'
      },
      {
        'name': 'Contact',
        'urlName':'contact',
        'class':'glyphicon glyphicon-pencil',
        'active':'contact'
      }];
    $scope.setActive=function(state){
        if($state.$current.name===state){
          return true
        }
    };
  }]);
