$(document).ready(function () {
    for (var i=1; i<152; i++) {
        var proxyurl = "https://cors-anywhere.herokuapp.com/";
        var url = "http://pokeapi.co/api/v2/pokemon/" + i;
        $.get(proxyurl+url, function(res) {
            $('body').append("<img src=" + res.sprites.front_default + ">")
        }, "json");
    }
});
