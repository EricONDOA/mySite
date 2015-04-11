/**
 * Created by yanning on 11/04/2015.
 */
'use strict';

angular.module('siteFrancoiseApp')
  .controller('photothequeCtrl',['$scope','$rootScope','$state', function ($scope,$rootScope,$state) {
    setPhototequeActive($state);
    function setPhototequeActive($state){
      if($state.$current.name==='phototheque'){
        $rootScope.contactIsActive=false;
        $rootScope.agendaIsActive=false;
        $rootScope.accueilIsActive=false;
        $rootScope.audiothequeIsActive=false;
        $rootScope.videothequeIsActive=false;
        $rootScope.photothequeIsActive=true;
      }
    }
  }]);
