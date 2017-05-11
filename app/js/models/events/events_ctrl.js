(function() {
  'use strict';

  angular.module('almostFamousCMS')

  .controller('EventsCtrl', ['$scope', '$http', '$state', 'EventsService', 'SERVER', '$stateParams', '$window',
   function($scope, $http, $state, EventsService, SERVER, $stateParams, $window) {

     var vm = this;
     var eid = $stateParams.id;
     var endpoint = SERVER.URL;
     var Config = {params: {apiKey: SERVER.CONFIG.apiKey}};



//Post EVENTS
      $scope.postEvent = function (id)
      {
        EventsService.postEvent(id);
        console.log('Posted to /events and got back:', id);
      };



//Get EVENTS
      vm.state = {event:[]};
      vm.getEvent = function (res)
      {
       EventsService.getEvent(res).then(function(res)
       {
       $scope.event = res.data;
      //  console.log('These are events from DB:' + res.options);
        });
      };
      vm.getEvent({res:''});

//Get a single _ID

      $scope.getById = function(id)
      {
        EventsService.getById(id).then(function(option)
        {
          $scope.option = option;
        });
      };



//Put EVENTS
      $scope.editEvent = function(eid)
      {
        EventsService.editEvent(eid);
      };


//Delete Event
      $scope.deleteEvent = function(eid)
      {
        var ckDelete = $window.confirm('Are you sure you want to delete this event?');
        if(ckDelete)
        {
          EventsService.deleteEvent(eid);
        }
      };




//============================================================
//            /\
//           /||\
//            ||
//            ||
//Everything goes above here ==================================
   }
  ]);
}());
