/**
 * Created by yanning on 11/04/2015.
 */
'use strict';

angular.module('siteFrancoiseApp')
  .controller('contactCtrl',['$scope','$rootScope','$state', function ($scope,$rootScope,$state) {
    setContactActive($state);
    function setContactActive($state){
      if($state.$current.name==='contact'){
        $rootScope.contactIsActive=true;
        $rootScope.agendaIsActive=false;
        $rootScope.accueilIsActive=false;
        $rootScope.audiothequeIsActive=false;
        $rootScope.videothequeIsActive=false;
        $rootScope.photothequeIsActive=false;
      }
    }
  }]);
