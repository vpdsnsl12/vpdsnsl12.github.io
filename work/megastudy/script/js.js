// 메가pick
$(".pick-right-a").click(function (e) {
    e.preventDefault();
    $(".pick-slide-wrap").animate({ "margin-left": "-1440px" });
});

$(".pick-left-a").click(function (e) {
    e.preventDefault();
    $(".pick-slide-wrap").animate({ "margin-left": "0px" });
});

// 베스트셀러
$(".right-book").click(function (e) {
    e.preventDefault();
    $(".book-jump").animate({ "margin-left": "-470px" }, function () {
        $('.book-jump li').first().appendTo(".book-jump");
        $(".book-jump").css({ "margin-left": "0px" });
    });
});
$(".left-book").click(function (e) {
    e.preventDefault();
    $(".book-jump").animate({ "margin-left": "470px" }, function () {
        $(".book-jump li:last").prependTo(".book-jump");
        $(".book-jump").css({ "margin-left": "0px" });
    });
});


// 유튜브
$(".right-youtube").click(function (e) {
    e.preventDefault();
    $(".youtube-jump").animate({ "margin-left": "-300px" });
});

$(".left-youtube").click(function (e) {
    e.preventDefault();
    $(".youtube-jump").animate({ "margin-left": "0px" });
});

// main-slide-button
$(".right").click(function (e) {
    e.preventDefault();
    $(".main-slide-wrap").animate({ "margin-left": "-4380px" }, function () {
        $('.main-slide-wrap div').first().appendTo('.main-slide-wrap')
        $('.main-slide-wrap').css({ 'margin-left': '-2920px' })
    });
});

$(".left").click(function (e) {
    e.preventDefault();
    $(".main-slide-wrap").animate({ "margin-left": "-1460" }, function () {
        $('.main-slide-wrap div').last().prependTo('.main-slide-wrap')
        $('.main-slide-wrap').css({ 'margin-left': '-2920px' })
    });
});
