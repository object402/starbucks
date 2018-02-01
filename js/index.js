$(function(){
  $('.wrap_subNav').hide();

  //네비
  $('.wrap_mainNav>ul>li').on('mouseover',function(){
     //$('.wrap_subNav').stop().slideUp();
     $(this).children('.wrap_subNav').stop().slideDown();
 })
 $('.wrap_mainNav>ul>li').on('mouseleave',function(){
    $('.wrap_subNav').stop().slideUp();
})


  //서치 아이콘 위치
  var topNavW = $('.topNav ul').width();
  $('.search').css('margin-left',topNavW-1);
});
