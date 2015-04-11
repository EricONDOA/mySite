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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
