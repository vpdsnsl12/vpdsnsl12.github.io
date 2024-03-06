$(".main-menu").mouseenter(function(){
    $(".sub-menu").stop().slideDown();
    $(".menu-box").stop().slideDown();
    $("h1 img").addClass('on')
});

$(".main-menu").mouseleave(function(){
    $(".sub-menu").stop().slideUp();
    $("h1 img").removeClass('on')
    $(".menu-box").stop().slideUp();
});

$(".main-menu-2").mouseenter(function(){
    $(".sub-menu-2").stop().slideDown();
    $("h1 img").addClass('on')
    $(".menu-box").stop().slideDown();
});

$(".main-menu-2").mouseleave(function(){
    $(".sub-menu-2").stop().slideUp();
    $("h1 img").removeClass('on')
    $(".menu-box").stop().slideUp();
});
