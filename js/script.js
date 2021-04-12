
// burger
$(document).ready(function () {
    $('.burder_menu').click(function (event) {
        $('.burder_menu, #main-menu, #main-menu-news,  #main-menu li .link').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.active').click(function (event) {
        $('.burder_menu, #main-menu, #main-menu-news,  #main-menu li .link').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
// $('.link.active').on('click', function(){
//     $('.burder_menu, #main-menu, #main-menu-news, #main-menu li .link').toggleClass('active');
//     $('body').toggleClass('lock');
// });

// forms
$(document).ready(function () {
    $('.home_submit').click(function (event) {
        $('.home_submit, .main-content').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
$('.button_exit').on('click', function(){
    $('.home_submit, .main-content').toggleClass('active');
    $('body').toggleClass('lock');
});

