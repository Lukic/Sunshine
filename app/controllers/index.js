var Sunshine = require('/sunshine');

Sunshine.getCurrentWeather({
  city: "London",
  success: function(result) {

    var currentTemp = result.main.temp;

    $.currentTemperature.text = currentTemp;
    $.cityName.text = "London";

    console.log(result.main.temp);
  },
  error: function(error) {
    console.error(error);
  }
});


$.index.open();