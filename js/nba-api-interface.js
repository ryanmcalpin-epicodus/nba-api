var NBA = require('./../js/nba-api.js').NBAModule;

$(document).ready(function() {
  $('#time').text(moment().format('dddd, MMM Do, h:mm A'));

  var nba = new NBA();
  nba.getTeams(displayTeams);
});

var displayTeams = function(teams) {
  teams.forEach(function(team) {
    $('#teams').append("<li style='color:#" + team.PrimaryColor +  "; background-color:#" + team.SecondaryColor + "; text-shadow: 3px 2px #" + team.TertiaryColor + ";' class='" + team.TeamID + "'>" + team.City + " " + team.Name + "</li>");
  });
}
