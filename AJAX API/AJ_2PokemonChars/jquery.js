$(document).ready(function () {
    for (var i=1; i<152; i++) {
        var proxyurl = "https://cors-anywhere.herokuapp.com/";
        var url = "http://pokeapi.co/api/v2/pokemon/" + i;
        $.get(proxyurl+url, function(res) {
            $('.images').append("<img src=" + res.sprites.front_default + ">")
        }, "json");

        // $.get("https://pokeapi.co/api/v2/pokemon/" + i, function(res) {
        //     $('.images').append("<img src=" + res.sprites.front_default + ">")
        // }, "json");
            
        // $('.images').append("<img src='https://pokeapi.co/media/img/" + i + ".png'>")
    }
    
    $(document).on('click', 'img', function() {
        var imgAddr = $(this).attr('src');
        console.log("the class is .... " + $(this).attr('class'));
        if (imgAddr.search("img/") > 0) {
            posName = imgAddr.search("img/") + 4;
        }
        else {
            posName = imgAddr.search("pokemon/") + 8;
        }
        var posExt = imgAddr.search(".png");
        var imgName = imgAddr.substring(posName, posExt);
        $.get("https://pokeapi.co/api/v2/pokemon/" + imgName, function(res) {
            var charName = res.name.charAt(0).toUpperCase() + res.name.substring(1, res.name.length);
            var htmlString = "<h1>" + charName + "</h1>";
            htmlString += "<img src=" + res.sprites.front_default + ">";
            htmlString += "<h2>Types</h2><ul>"
            for (var i = 0; i < res.types.length; i++) {
                htmlString += "<li>" + res.types[i].type.name + "</li>";
            }
            htmlString += "</ul>";
            htmlString += "<h2>Height</h2><p>" + res.height + "</p>";
            htmlString += "<h2>Weight</h2><p>" + res.weight + "</p>";

            $('.characterInfo').html(htmlString);
            $("html, body").animate({ scrollTop: 0 }, "slow")
        });
    });
});
