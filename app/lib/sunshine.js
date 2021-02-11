var app_key = "Jere app key";

function getHttpData(args, tries) {
  var xhr = Titanium.Network.createHTTPClient();
  tries = tries || 0;

  if (Titanium.Platform.osname !== "android") {
    xhr.setCache(false);
  }

  xhr.open(args.method, args.url);
  xhr.setRequestHeader("Authorization", "Bearer " + Ti.App.Properties.getString('UserToKen'));
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function(e) {
    if (this.responseText != null) {
      var json = JSON.parse(this.responseText);
      if (args.success) {
        args.success(json);
      }
    } else {
      if (args.error) {
        args.error("intet data");
      }
    }
  };
  xhr.onerror = function(e) {
    if (args.error) {
      args.error(e);
    }
  };
  if (args.payload != null) {
    xhr.send(args.payload);
  } else {
    xhr.send();
  }
};


function getCurrentWeather(args) {
  getHttpData({
    method: "GET",
    url: "http://api.openweathermap.org/data/2.5/weather?q=" + args.city + "&appid=" + app_key + "&units=metric",
    success: function(result) {
      args.success(result);
    },
    error: function(result) {
      args.error(result);
    }
  });
};

function getHourlyForecast() {

}


exports.getCurrentWeather = getCurrentWeather;
exports.getHourlyForecast = getHourlyForecast;