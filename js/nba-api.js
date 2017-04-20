var apiKey = require('./../.env').apiKey;

function NBA() {
}

NBA.prototype.getTeams = function(displayTeams) {
  $.get({
    type : "GET",
    url : "https://api.fantasydata.net/v3/nba/stats/json/AllTeams",
    beforeSend : function(xhr){xhr.setRequestHeader('Ocp-Apim-Subscription-Key', apiKey);},
    success : function(result) {
      console.log(result);
      var teams = result;
      displayTeams(teams);
    },
    error : function(result) {
      $('#teams').text(error.responseJSON.message);
    }
  }).then(function(response) {

  });
};

exports.NBAModule = NBA;
