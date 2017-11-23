$(function(){
  $('.wrap_subNav').hide();

  $('.wrap_mainNav>ul>li').mouseenter(function(){
    $('.wrap_subNav').slideDown('normal');
    $('.wrap_subNav').mouseleave(function(){
      $(this).slideUp('normal');
    })
    $('.wrap_mainNav>ul>li').mouseleave(function(){
      $('.wrap_subNav').slideUp('normal');
    })

  })

})
