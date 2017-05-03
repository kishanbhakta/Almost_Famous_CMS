;(function (){

  'use strict';

  angular.module('almostFamousCMS')

  .service('EventsService', ['SERVER', '$http', '$state',
    function (SERVER, $http, $state) {

      var endpoint = SERVER.URL;

//Event Constructor
      var Event = function (options) {
            this.eventDate =  options.eventDate;
            this.venue =  options.venue;
            this.startTime =  options.startTime;
            this.endTime =  options.endTime;
            this.ticketLink =  options.ticketLink;
      };

//Post

     this.postEvent = function (options)
     {
       var addEvent = new Event(options);

        $http.post(endpoint + '/events', addEvent, {params: {apiKey: SERVER.CONFIG.apiKey}}).then(function(){

          $state.go('home');

        });
      };



//Get
      this.getEvent = function (res)
      {
        return $http.get(endpoint + '/events', {params: {apiKey: SERVER.CONFIG.apiKey}});
      };

//Get _ID

      this.getSingleId = function()
      {

      };
//Put

//============================================================
//            /\
//           /||\
//            ||
//            ||
//Everything goes above here ==================================
  }]);
}());
