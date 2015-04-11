/**
 * Created by yanning on 11/04/2015.
 */
'use strict';

angular.module('siteFrancoiseApp')
  .controller('agendaCtrl',['$rootScope','$state', function ($rootScope,$state) {
    setAgendaActive($state);
    function setAgendaActive($state){
      if($state.$current.name==='agenda'){
        $rootScope.agendaIsActive=true;
        $rootScope.accueilIsActive=false;
        $rootScope.audiothequeIsActive=false;
        $rootScope.videothequeIsActive=false;
        $rootScope.contactIsActive=false;
        $rootScope.photothequeIsActive=false;
      }
    }
  }]);
