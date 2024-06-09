$(document).ready(function() {
  //! 메인메뉴 구현 완 
  $(".submenu").hide();

  $(".mainmenu").mouseover(function(){
    $(".submenu").stop().slideDown(300);
  }).mouseout(function(){
    $(".submenu").stop().slideUp(300);
  });

  // ! 이미지 슬라이드 구현 완
  $(".slide > a:gt(0)").hide();

  setInterval(function(){
    $('.slide a:first-child').fadeOut()
    .next('a').fadeIn()
    .end().appendTo('.slide');
  }, 3000);

  // ! 탭 메뉴 구현 완
  $(function(){
    $('.tabMenu>li>a').click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
          return false;
      });
    });
  
  // ! 팝업창 구현 
  $('.notice li:first').click(function(){
    $('#modalWrap').addClass("active");
  });
  $('.btn').click(function(){
    $('#modalWrap').removeClass("active");
  });
});