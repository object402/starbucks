$(function() {
  $('.wrap_subNav').hide();

  $('.wrap_mainNav>ul>li').on('hover', function() {

    $('.wrap_subNav').stop().slideToggle();

    $(this).children('.wrap_subNav').stop(true, true).slideToggle();

  });

  var topNavW = $('.topNav ul').width();
  $('.search').css('margin-left', topNavW - 1);
});
