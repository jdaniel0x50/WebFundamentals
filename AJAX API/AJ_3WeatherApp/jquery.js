$(document).ready(function () {
    $('.city').focus();
    $('button').click(function() {
        var city = $('.city').val();
        var zip = $('.zip').val();
        if (zip) {
            searchString = "zip=" + zip;
        } else if (city) {
            searchString = "q=" + city;
        } else {
            alert("You have not entered any search terms.");
            return;
        }
        $('.todayWeather').text("");
        $.get("http://api.openweathermap.org/data/2.5/weather?" + searchString + "&units=imperial&APPID=30e88e4d6348c1b24222c23008a330ea", function(res) {
            $('h2').text(res.name + ", " + res.sys.country);
            var htmlString = "<p>Temperature: " + res.main.temp + "&deg; Farenheit";
            htmlString += "<p>Today's maximum: " + res.main.temp_max + "&deg; Farenheit</p>";
            htmlString += "<p>Today's minimum: " + res.main.temp_min + "&deg; Farenheit</p>";
            htmlString += "<p class='textUnderline'>Current weather conditions:</p><ul>";
            for (var i=0; i<res.weather.length; i++) {
                htmlString += "<li>" + res.weather[i].main + " (" + res.weather[i].description + ")</li>";
            }
            htmlString += "</ul>";
            $('.todayWeather').append(htmlString);
            $('.city').val("");
            $('.zip').val("");
            $('.city').focus();
        })
    });
});
