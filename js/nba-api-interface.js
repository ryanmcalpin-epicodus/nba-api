var Team = require('./../js/nba-api.js').teamModule;

$(document).ready(function() {
  $('#time').text(moment());
  $('#team-butt').click(function() {
    var team = $('#team').val();
    $('#teams').text("You've selected the " + team + ".");
  });
});
