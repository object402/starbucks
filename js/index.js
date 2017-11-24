$(function(){
  $('.wrap_subNav').hide();

  $('.wrap_mainNav>ul>li>a').on('hover',function(){
    $(this).next().stop().slideToggle();
  });

  var topNavW = $('.topNav ul').width();
  $('.search').css('margin-left',topNavW);
  console.log(topNavW);
});
