$(function(){
  $('.wrap_subNav').hide();

  $('.wrap_mainNav>ul>li').on('hover',function(){
<<<<<<< HEAD
    $('.wrap_subNav').stop().slideToggle();
=======
    $(this).children('.wrap_subNav').stop(true, true).slideToggle();
>>>>>>> 7cc421e88598f21252e145a5078216cc69d4422f
  });

  var topNavW = $('.topNav ul').width();
  $('.search').css('margin-left',topNavW-1);
});
