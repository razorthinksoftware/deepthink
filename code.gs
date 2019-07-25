function publishToTravis() {
  var authorization = 'token JCCK_EXN4Y1_Zw_3DOU6Yw';
  var slugId = 'razorthinksoftware%2Fdeepthink';
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
