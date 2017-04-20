var NBA = require('./../js/nba-api.js').NBAModule;
var Team = require('./../js/team.js').TeamModule;

$(document).ready(function() {
  $('#time').text(moment().format('dddd, MMM Do, h:mm A'));

  var nba = new NBA();
  nba.getTeams(displayTeams);
});

var displayTeams = function(teams) {
  teams.forEach(function(team) {
    $('#teams').append("<li style='color:#" + team.PrimaryColor +  "; background-color:#" + team.SecondaryColor + "; text-shadow: 3px 2px #" + team.TertiaryColor + ";'><span class='team' id='" + team.Key + "'>" + team.City + " " + team.Name + "</span></li>");

    $('.team').last().click(function() {
      $('#team-info').text(this.innerHTML);
      $('#teams').empty();
      var team = new Team();
      team.getPlayers(this.id, displayPlayers);
    });
  });
};

var displayPlayers = function(players) {
  console.log("list of players: " + players);
  players.forEach(function(player) {
    $('#teams').append("<li><img src='" + player.PhotoUrl + "'></img> " + player.Position + ", #" + player.Jersey + " " + player.YahooName + "</li>");
  });
};
