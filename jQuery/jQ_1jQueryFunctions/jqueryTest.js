$(document).ready(function () {
    $('button.addClass').click(function () {
        $('p.addClass').addClass("redText");
    });
    $('button.removeClass').click(function() {
        $('p.addClass').removeClass("redText");
    })
    $('button.hide').click(function() {
        $('p.hide').hide();
    })
    $('button.show').click(function() {
        $('p.hide').show();
    })
    $('button.toggle').click(function() {
        $('p.toggle').toggle(1000);
    })
    $('button.slideDown').click(function() {
        $('p.slideDown').slideDown();
    })
    $('button.slideUp').click(function() {
        $('p.slideDown').slideUp();
    })
    $('button.slideToggle').click(function() {
        $('p.slideToggle').slideToggle();
    })
    $('button.fadeIn').click(function() {
        $('p.fadeIn').fadeIn();
    })
    $('button.fadeOut').click(function() {
        $('p.fadeIn').fadeOut();
    })

    var originalText = $('p.textContainer').text();
    var originalHTML = $('p.html').html();
    $('button.before').click(function() {
        $('p.textContainer').before("<p class='remove block'>&ensp;New paragraph before!</p>");
    })
    $('button.after').click(function() {
        $('p.textContainer').after("<p class='remove block'>&ensp;New paragraph after!</p>");
    })
    $('button.append').click(function() {
        $('p.textContainer').append(" ... new text appended ... ");
    })
    $('button.text').click(function() {
        $('p.textContainer').text("This is completely new text!");
    })
    $('button.resetText').click(function() {
        $('p.textContainer').text(originalText)
        $('p.html').html(originalHTML);
        $('p.remove').remove();
    })
    $('button.html').click(function() {
        var htmlString = $('p.html').html();
        $('p.html').text(htmlString);
    })

    $('button.attr').click(function() {
        var tempText = $(this).text();
        var buttonAttr = $(this).attr("class");
        $('input.attr').val(tempText + " - HTML classes (attributes) set on the button --> " + buttonAttr);
    })


});
