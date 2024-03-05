setInterval(function () {
    $(".slide-wrap").animate({ "margin-left": "-100%" }, function () {
        $(".slide").first().appendTo(".slide-wrap");
        $(".slide-wrap").css({ "margin-left": "0%" });
    });
}, 3000);

$(".main-menu").mouseenter(function () {
    $(".menu-bg").stop().slideDown();
    $(".sub-menu").stop().slideDown();
});
$(".main-menu").mouseleave(function () {
    $(".menu-bg").stop().slideUp();
    $(".sub-menu").stop().slideUp();
});
