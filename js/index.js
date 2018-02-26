$(function(){
  $('.wrap_subNav').hide();

  //네비
  //걍 이걸로 하자.
  $('.wrap_mainNav>ul>li').on('mouseenter',function(){
     //$('.wrap_subNav').stop().slideUp();
     $(this).children('.wrap_subNav').stop().slideDown();
 })
 $('.wrap_mainNav>ul>li').on('mouseleave',function(){
    $('.wrap_subNav').stop().slideUp();
})
  var topNavW = $('.topNav ul').width();
  $('.search').css('margin-left',topNavW-1);
});
