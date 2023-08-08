$(document).ready(() => {
    $("#home").click(() => {
        if ($(window).width() < 991) {
            $("#menu").show();
        }        
    });

    $("#close").click(() => {
        if ($(window).width() < 991) {
            $("#menu").hide();
        }        
    });
});