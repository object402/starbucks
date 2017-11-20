$(document).ready(function(){
  $(".thumnail_img_sub a").each(function(i){
    $(this).index();
    var thumSmall = $(".thumnail_img_sub img").eq(i);
    var thumMain = $(".thumnail_img_main img").eq(i);
    $(thumSmall).click(function(){
      $(".thumnail_img_main img").css("display","none");
      $(".thumnail_img_main img.more_icon").css("display","block");
      $(thumMain).css("display","block");
    })
  })
})
