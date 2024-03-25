// 모바일 메뉴----------------------------------------------------------
var btn = 0;
$(".bar_mobile").click(function () {
  btn = !btn;
  if (btn) {
    $(".wrap").animate({
      right: "150px",
    });
  } else {
    $(".wrap").animate({
      right: "0px",
    });
  }
});

// ----------------------------------------------------------------------------------------
var sw = 0;
var scrTop = 0;
var activeHeight = 0;
$(window).scroll(function () {
  scrTop = $(window).scrollTop();

  $(".secTit").removeClass("on");
  $(".secMenu").removeClass("on");

  $("section").each(function (i) {
    var sectTop = $(this).offset().top;
    ////SECTION 활성화 체크/////////////////////////////////////////////
    if (scrTop >= sectTop - 300) {
      // 스크롤 위치 따라 네비 on,off
      $("#remote ul li a").removeClass("on");
      $("#remote ul li").eq(i).find("a").addClass("on");

      // 텍스, 컨텐츠 서브 메뉴 move
      $(this).find(".secTit").addClass("on");
      $(this).find(".secMenu").addClass("on");

      $("section .inner").removeClass("moveBg");
      $("section").eq(i).find(".inner").addClass("moveBg");

      ////Desc 활성화 체크/////////////////////////////////////////////
      sw = $(this).hasClass("on");
      if (sw) {
        $(".fixedshrimp").addClass("left");
      } else {
        $(".fixedshrimp").removeClass("left");
        $(".fixedshrimp").addClass("on");
      }
    } //uf
  }); //each

  if (scrTop >= 200) {
    $(".fixedshrimp").addClass("on");
  } else {
    $(".fixedshrimp").removeClass("on");
  }
}); //scroll
// ----------------------------------------------------------------------------------------

$(window).resize(function () {
  location.reload();
});
// -----------------------------------------------
$(".nav_pc li a, #remote li a,.nav_mobile li a").click(function () {
  var href = $(this).attr("href");
  var scrTop = $(href).offset().top - 75;
  $("html, body").animate({
    scrollTop: scrTop,
  });
});

// -----------------------------------------------

function toggleImg(imgElem, hover, leave) {
  let changImg = $(imgElem).attr("src").replace(hover, leave);
  console.log(changImg);
  $(imgElem).attr("src", changImg);
}

$(".secMenu ul li a").on({
  mouseenter: function () {
    let thisImg = $(this).find("img");
    console.log(thisImg);
    toggleImg($(thisImg), "Off", "On");
  },
  mouseleave: function () {
    let thisImg = $(this).find("img");
    console.log(thisImg);
    toggleImg($(thisImg), "On", "Off");
  },

  click: function (e) {
    e.preventDefault();

    $(".btnClose").fadeIn();
    //썸네일 title 의 detail주소
    var panelOn = $(this).attr("href");

    $("section").removeClass("on");
    $(panelOn).closest("section").addClass("on");

    //클릭한 좌측title에서 가장 가까운 상세페이지 영역
    var active = $(this).closest(".inner").next();
    //기존에 열려있는 상세페이지는 닫고
    $(".secDesc").not($(active)).animate({
      height: 0,
    });
    //열려 있는게 있으면 지우기
    $(".secDesc li").fadeOut();
    //클릭한 href 상세페이이보기
    $(panelOn).fadeIn();

    var descActiveHeight = $(panelOn).outerHeight() * 1.2;
    $(panelOn).closest(".secDesc").animate({
      height: descActiveHeight,
    });
  },
});
//////////////////////////////////////////////////////
$(".btnClose").click(function (e) {
  $("section").removeClass("on");
  $(".fixedshrimp").removeClass("left");
  $(".fixedshrimp").addClass("on");
  e.preventDefault();

  $(this).fadeOut();
  $(".secDesc >li").fadeOut();
  $(".secDesc").animate({
    height: 0,
  });
});
