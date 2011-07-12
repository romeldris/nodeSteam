var log = require('logging');

var steam = require('./app');
var s = new steam({
  apiKey: 'XXX'
});

/*
s.getNewsForApp({
  appid: 440,
  count: 3,
  maxlength: 300,
  callback: log
})
s.getGlobalAchievementPercentagesForApp({
  callback: log,
  gameid: 440
});
*/

/*
s.getPlayerSummaries({
  callback: function(d) {
    log(d);
  },
  steamids: 76561197960435530
})
*/

s.getSchema({
  gameid: 440,
  callback: log
})


s.getPlayerItems({
  gameid: 440,
  callback: log,
  steamid: 76561197960435530
})