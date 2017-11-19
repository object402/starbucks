$(document).ready(function(){
  // 1-1 분류보기 탭 클래스 추가 및 보이기
  $(".product_category_list dt").each(function(i){
    $(this).index(); // function i 가 dt a 의 인덱스를 뜻함
    var dtIdx = $(".product_category_list dt").eq(i);
    var ddIdx = $(".product_category_list dd").eq(i);
    $(dtIdx).click(function(){
      $(".product_category_list dt a").removeClass("select");
      $(this).children("a").addClass("select");
      $(".product_category_list dd").css("display","none");
      $(ddIdx).css("display","block");
    });
  });

  //2-1 뷰탭 (사진으로보기, 영양정보로 보기) -> 위의 each 함수와 같은 기능 다른 서술
  $(".product_view_tap .product_view_tap_photo").click(function(){
    $(".product_item_name img,p").css("display","block");
    $(".product_view_tap a").removeClass("select");
    $(this).addClass("select");
    $(".product_item_list_photo").css("display","block");
    $(".product_item_list_nutrition").css("display","none");
  });
  $(".product_view_tap .product_view_tap_nutrition").click(function(){
    $(".product_view_tap a").removeClass("select");
    $(".product_item_name img,p").css("display","none");
    $(this).addClass("select");
    $(".product_item_list_photo").css("display","none");
    $(".product_item_list_nutrition").css("display","block");
  });
//  3-1 메뉴 list img 호버 시 이미지 사이즈 업 CSS로 대체
  // $(".product_item_list_photo li img").hover(function(){
  //   $(this).animate({width:280},1000);
  // },function(){
  //   $(this).animate({width:260},1000);
  // });


}); //메인 스크립트 종료
