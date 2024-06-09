$(document).ready(function() {
  //! 메인메뉴 구현 완 
  $(".submenu").hide();

  $(".mainmenu").mouseover(function(){
    $(".submenu").stop().slideDown(300);
  }).mouseout(function(){
    $(".submenu").stop().slideUp(300);
  });

  // ! 이미지 슬라이드 구현 
})