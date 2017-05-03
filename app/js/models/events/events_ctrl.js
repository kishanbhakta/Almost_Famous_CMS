(function() {
  'use strict';

  angular.module('almostFamousCMS')

  .controller('EventsCtrl', ['$scope', '$http', '$state', 'EventsService', 'SERVER', '$stateParams', '$window',
   function($scope, $http, $state, EventsService, SERVER, $stateParams, $window) {

     var vm = this;
     var id = $stateParams.id;

//Post EVENTS
      $scope.postEvent = function (options)
      {
        EventsService.postEvent(options);
        console.log('Posted to /events and got back:', options);
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

      $scope.getSingleId = function(id)
      {
        EventsService.getSingleId(id).then(function(data)
        {
          $scope.option = data;
        });
      };

//Put EVENTS
      $scope.editEvent = function(option)
      {
        EventsService.editEvent(option);
      };


//Delete Event
      $scope.deleteEvent = function(id)
      {
        var ckDelete = $window.confirm('Are you sure you want to delete this event?');
        if(ckDelete)
        {
          EventsService.deleteEvent(id);
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
