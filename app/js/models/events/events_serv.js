;(function (){

  'use strict';

  angular.module('almostFamousCMS')

  .service('EventsService', ['SERVER', '$http', '$state', '$stateParams',
    function (SERVER, $http, $state, $stateParams) {

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



//Put Event
      this.editEvent = function(eid)
      {
        console.log('This is the id:', eid);
        return $http.put(endpoint + '/events/' + eid, Config).then(function(res)
        {
          if(res)
          {
            res.msg = "PUT Data Method Executed Successfully!";
          }
        });
      };



//Delete Event
      this.deleteEvent = function(eid)
      {
        return $http.delete(endpoint + '/events/' + eid, Config).then(function()
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
