/**
 * Created by yanning on 11/04/2015.
 */
'use strict';

angular.module('siteFrancoiseApp')
  .controller('videothequeCtrl',['$scope','$rootScope','$state', function ($scope,$rootScope,$state) {
    setVideothequeActive($state);
    function setVideothequeActive($state){
      if($state.$current.name==='videotheque'){
        $rootScope.contactIsActive=false;
        $rootScope.agendaIsActive=false;
        $rootScope.accueilIsActive=false;
        $rootScope.audiothequeIsActive=false;
        $rootScope.videothequeIsActive=true;
        $rootScope.photothequeIsActive=false;
      }
    }
  }]);
