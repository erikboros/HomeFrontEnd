(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready

  /*
    .roomtemp .outertemp .weathericon

    Client ID (Consumer Key)
    dj0yJmk9Mm0ycW0ycEdUYWRuJmQ9WVdrOWFsWlZSV1ZHTldFbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1iMA--
    Client Secret (Consumer Secret)
    41a4ff35597bd2625f1af0e305e4bdf71b410d8f

    Pomáz woeid: 813959
    Yahoo YQL for current condition: select item.condition from weather.forecast where woeid = 2487889
    ---select item.condition from weather.forecast where woeid = 813959 and u='C'
    End point: https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202487889&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys

    */

    var iconid ={
      0 : 'F', //tornado
      1 : 'F', //tropical storm
      2 : 'F', //hurricane
      3 : '0', //severe thunderstorms
      4 : '0', //thunderstorms
      5 : 'X', //mixed rain and snow
      6 : 'X', //mixed rain and sleet
      7 : 'X', //mixed snow and sleet
      8 : 'X', //freezing drizzle
      9 : 'X', //drizzle
      10 : 'X', //freezing rain
      11 : 'Q', //showers
      12 : 'Q', //showers
      13 : 'V', //snow flurries
      14 : 'V', //light snow showers
      15 : 'U', //blowing snow
      16 : 'U', //snow
      17 : 'X', //hail
      18 : 'X', //sleet
      19 : 'M', //dust
      20 : 'M', //foggy
      21 : 'J', //haze
      22 : 'E', //smoky
      23 : 'F', //blustery
      24 : 'F', //windy
      25 : 'G', //cold
      26 : 'N', //cloudy
      27 : 'I', //mostly cloudy (night)
      28 : 'H', //mostly cloudy (day)
      29 : 'I', //partly cloudy (night)
      30 : 'H', //partly cloudy (day)
      31 : 'I', //clear (night)
      32 : 'B', //sunny
      33 : 'C', //fair (night)
      34 : 'B', //fair (day)
      35 : 'X', //mixed rain and hail
      36 : 'B', //hot
      37 : 'P', //isolated thunderstorms
      38 : 'P', //scattered thunderstorms
      39 : 'P', //scattered thunderstorms
      40 : 'Q', //scattered showers
      41 : 'W', //heavy snow
      42 : 'U', //scattered snow showers
      43 : 'W', //heavy snow
      44 : 'H', //partly cloudy
      45 : 'Z', //thundershowers
      46 : 'W', //snow showers
      47 : '0', //isolated thundershowers
      3200 : '', //not available
    };

    var woeid = 813959 //Pomáz
    var queryURL = "https://query.yahooapis.com/v1/public/yql?q=" + 
    "select item.condition from weather.forecast where woeid = " + woeid + " and u='C'" + 
    "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

    $.getJSON(queryURL, function (data) {
      var cond = data.query.results.channel.item.condition
      //console.log(cond.temp)
      //console.log(cond.code)
      $('.outertemp').text(' ' + cond.temp + '°');
      $('.weathericon').attr('data-icon', iconid[cond.code]);
    });

    
})(jQuery); // end of jQuery name space