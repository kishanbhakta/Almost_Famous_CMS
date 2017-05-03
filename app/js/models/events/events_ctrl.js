(function() {
  'use strict';

  angular.module('almostFamousCMS')

  .controller('EventsCtrl', ['$scope', '$http', '$state', 'EventsService', 'SERVER',
   function($scope, $http, $state, EventsService, SERVER) {

     var vm = this;

//Post EVENTS
      $scope.postEvent = function (options) {
        EventsService.postEvent(options);
        console.log('Posted to /events and got back:', options);
      };



//Get EVENTS
      vm.state = {event:[]};
      vm.getEvent = function (res) {
       EventsService.getEvent(res).then(function(res){
       $scope.event = res.data;
       console.log('These are events from DB:' + res.options);
        });
      };
      vm.getEvent({res:''});

//Put EVENTS
      // vm.state = {event:[]};
      // vm.putEvent = function (res) {
      //  EventsService.get_ID(eventID).then(function(eventID){
      //  EventsService.putEvent(eventID).finally(function(res){
      //    $scope.events = res.data;
      //    console.log('This event has been edited' + res.data);
      //    });
      //
      //    });
      //  };
      // vm.putEvent({res:''});
   }
  ]);
}());
