;(function (){

  'use strict';

  angular.module('almostFamousCMS')

  .service('EventsService', ['SERVER', '$http', '$state',
    function (SERVER, $http, $state) {

      var endpoint = SERVER.URL;
      var Config = {params: {apiKey: SERVER.CONFIG.apiKey}};

//Event Constructor
      var Event = function (options) {
            this.eventDate =  options.eventDate;
            this.venue =  options.venue;
            this.startTime =  options.startTime;
            this.endTime =  options.endTime;
            this.ticketLink =  options.ticketLink;
      };

//Post Events

     this.postEvent = function (options)
     {
       var addEvent = new Event(options);

        $http.post(endpoint + '/events', addEvent, Config).then(function(){

          $state.go('home');

        });
      };



//Get Events
      this.getEvent = function (res)
      {
        return $http.get(endpoint + '/events', Config);
      };

//Get a single _ID...This is to attach to $stateParams

      this.getSingleId = function(id)
      {
        return $http.get(endpoint + '/events/' + id, Config);
        console.log(endpoint + '/events/' + id, Config);
      };

//Put Event
      this.editEvent = function(option)
      {
        // var uid = _id.$oid;
        return $http.put(endpoint + '/events/' + uid, Config).then(function()
        {

          $state.go('home');

        });
      };

//Delete Event
      this.deleteEvent = function(id)
      {
        return $http.delete(endpoint + '/events/' + id, Config).then(function()
        {

          $state.go('home');

        });
      };
//============================================================
//            /\
//           /||\
//            ||
//            ||
//Everything goes above here ==================================
  }]);
}());
