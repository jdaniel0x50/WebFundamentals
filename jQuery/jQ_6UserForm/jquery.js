$(document).ready(function () {
    $('input.fname').focus();
    $('button.add').click(function() {
        var input = [$('input.fname').val(), $('input.lname').val(), $('input.email').val(), $('input.number').val()];
        $('table').append("<tr class='new'><td>" + input[0] + "</td><td>" + input[1] + "</td><td>" + input[2] + "</td><td>" + input[3] + "</td></tr>");
        $('input').val("");
        $('input.fname').focus();
    });
    $('button.remove').click(function() {
        $('tr.new').remove();
    })
});
