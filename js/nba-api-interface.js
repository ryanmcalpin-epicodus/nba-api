var Team = require('./../js/nba-api.js').teamModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#time').text(moment());

  $.get({
    type : "GET",
    url : "https://api.fantasydata.net/v3/nba/stats/json/AllTeams",
    beforeSend : function(xhr){xhr.setRequestHeader('Ocp-Apim-Subscription-Key', apiKey);},
    success : function(result) {
      console.log(result);
      var teams = result;
      teams.forEach(function(team) {
        $('#teams').append("<li style='color:#" + team.SecondaryColor +  "; background-color:#" + team.PrimaryColor + "; text-shadow: 3px 2px #" + team.TertiaryColor + ";' class='" + team.TeamID + "'>" + team.City + " " + team.Name + "</li>");
      });
    },
    error : function(result) {
      console.log(request);
    }
  });



  // $('#team-butt').click(function() {
  //   var team = $('#team').val();
  //   $('#teams').text("You've selected the " + team + ".");
  // });
});
