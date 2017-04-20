var Team = require('./../js/nba-api.js').teamModule;

$(document).ready(function() {
  $('#time').text(moment());

  $.get({
    type : "GET",
    url : "https://api.fantasydata.net/v3/nba/stats/json/AllTeams",
    beforeSend : function(xhr){xhr.setRequestHeader('Ocp-Apim-Subscription-Key', 'af76518ec911448db5176fa4a9627059');},
    success : function(result) {
      console.log(result);
    },
    error : function(result) {
      console.log(request);
    }
  });

  $('#team-butt').click(function() {
    var team = $('#team').val();
    $('#teams').text("You've selected the " + team + ".");
  });
});
