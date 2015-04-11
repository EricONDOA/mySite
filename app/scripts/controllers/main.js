'use strict';

/**
 * @ngdoc function
 * @name siteFrancoiseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the siteFrancoiseApp
 */
angular.module('siteFrancoiseApp')
  .controller('MainCtrl',['$scope','$rootScope','$state', function ($scope,$rootScope,$state) {
    setAccueilActive($state);
    function setAccueilActive($state){
      if($state.$current.name==='main'){
        $rootScope.accueilIsActive=true;
        $rootScope.agendaIsActive=false;
        $rootScope.audiothequeIsActive=false;
        $rootScope.videothequeIsActive=false;
        $rootScope.contactIsActive=false;
        $rootScope.photothequeIsActive=false;
      }
    }
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
