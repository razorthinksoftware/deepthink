function publishToTravis() {
  var authorization = 'token <travis_user_token>';
  var slugId = '<project_slug_id>';
  var options = {
    "method": "post",
    "headers": {'Content-Type': 'application/json', 'Travis-API-Version': '3', 'Accept':'application/json', 'Authorization': authorization },
    'muteHttpExceptions': true
  };
  var url = 'https://api.travis-ci.com/repo/'+slugId+'/requests';
  var response = UrlFetchApp.fetch(url, options);
  Logger.log('Logging . . .');
  Logger.log(response);
}
