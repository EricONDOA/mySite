/**
 * Created by yanning on 11/04/2015.
 */
'use strict';

angular.module('siteFrancoiseApp')
  .controller('audiothequeCtrl',['$scope','$rootScope','$state', function ($scope,$rootScope,$state) {
    setAudiothequeActive($state);
    function setAudiothequeActive($state){
      if($state.$current.name==='audiotheque'){
        $rootScope.audiothequeIsActive=true;
        $rootScope.contactIsActive=false;
        $rootScope.agendaIsActive=false;
        $rootScope.accueilIsActive=false;
        $rootScope.videothequeIsActive=false;
        $rootScope.photothequeIsActive=false;
      }
    }

  }]);
