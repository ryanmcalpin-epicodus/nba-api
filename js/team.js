var apiKey = require('./../.env').apiKey;

function Team() {
}

Team.prototype.getPlayers = function(key, displayPlayers) {
  $.get({
    type : "GET",
    url : "https://api.fantasydata.net/v3/nba/stats/json/Players/" + key,
    beforeSend : function(xhr){xhr.setRequestHeader('Ocp-Apim-Subscription-Key', apiKey);},
    success : function(result) {
      console.log(result + "??");
      var players = result;
      displayPlayers(players);
    },
    error : function(result) {
      $('#teams').text(error.responseJSON.message);
    }
  });
};

exports.TeamModule = Team;
