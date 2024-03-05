$('.swiper-pagination ul li a').click(function (e) {
    e.preventDefault
    $('.swiper-pagination ul li a').removeClass('on')
    $(this).addClass('on')
    let href = $(this).attr('href')
    $('.swiper-wrapper div').removeClass('on')
    $(href).addClass('on')
})

$('.main-menu').mouseenter(function () {
    $(this).find('.sub-menu').stop().slideDown()
})
$('.main-menu').mouseleave(function () {
    $(this).find('.sub-menu').stop().slideUp()
})