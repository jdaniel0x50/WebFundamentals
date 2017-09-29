$(document).ready(function () {
    // $('img').click(function () {
    //     $(this).fadeOut(800);
    // });
    // $('button').click(function() {
    //     $('img').fadeIn(800);
    // });
    $('.drag').draggable();
    $('button').click(function() {
        location.reload();
    });
    $('.accord').accordion();
    $('.tabs').tabs();
});
