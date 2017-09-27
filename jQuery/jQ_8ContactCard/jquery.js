$(document).ready(function () {
    $('input.fname').focus();

    $('button.add').click(function() {
        var input = [$('input.fname').val(), $('input.lname').val(), $('input.description').val()];
        $('.userCards').append("<div><h2 class='show'>" + input[0] + " " + input[1] + "</h2><p class='show'>Click for description</p><p class='hide'>" + input[2] + "</p></div>");
        $('.hide').hide();
        $('input.fname').val("");
        $('input.lname').val("");
        $('input.description').val("");
        $('input.fname').focus();
    });
    $('.userCards').on('click', 'p', function() {
        $(this).siblings().toggle();
        $(this).toggle();
    });
    $('button.remove').click(function() {
        $('.userCards div').remove();
    })
});
