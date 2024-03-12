$('.main-menu').mouseenter(function(){
    $(this).find('.sub-menu').stop().slideDown()
  })
  $('.main-menu').mouseleave(function(){
    $(this).find('.sub-menu').stop().slideUp()
  })
  $('header').mouseenter(function(){
    $(this).addClass('on')
  })
  $('header').mouseleave(function(){
    $(this).removeClass('on')
  })

  $('.sec5-list li a').click(function (e) {
    e.preventDefault();
    $('.sec5-list li a').removeClass('on')
    $(this).addClass('on')
    let href = $(this).attr('href')
    $('.tab').removeClass('on')
    $(href).addClass('on')
})
