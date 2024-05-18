setInterval(function () {
    $(".slide_wrap").animate({ "margin-left": "-100%" }, function () {
        $(".slide").first().appendTo(".slide_wrap");
        $(".slide_wrap").css({ "margin-left": "0%" });
    });
}, 3000);

