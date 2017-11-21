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

 // 3-1 메뉴 list img 호버 시 이미지 사이즈 업 CSS로 대체
  $(".product_item_list_photo li img").hover(function(){
    $(this).animate({width:280},1000);
  },function(){
    $(this).animate({width:260},1000);
  })

  // 2-2 카테고리 체크박스 체크시 해당 메뉴 보이기
  $(".dt1_category_wrap_ul li input").each(function(i) {
    //인풋 태그 순서대로 인덱스 가져오기
      $(this).index();
      //전체보기 탭 영역
      var inputIdxAll = $(".dt1_category_wrap_ul li input").eq(0);
      var checkBoxAll = $(".dt1_category_wrap_ul .ez_check").eq(0);

      var inputIdx = $(".dt1_category_wrap_ul li input").eq(i);
      var checkBox = $(".dt1_category_wrap_ul .ez_check").eq(i);
      var itemIdx = $(".product_item >div").eq(i-1);
      //전체보기는 해당 상품 리스트(div)에 없으므로 -1을 추가하여 순서 맞추기

      //전체 상품 보기 항상 On
      $(checkBoxAll).addClass("ex_check_on");

      $(inputIdxAll).toggle(function(){
        $(checkBoxAll).removeClass("ex_check_on");
        $(".product_item >div").css("display","none");
      },function(){
        $(checkBoxAll).addClass("ex_check_on");
        $(".product_item >div").css("display","block");
      });

      //각 상품별 탭 (인풋 클릭시 보이기)
      $(inputIdx).not(inputIdxAll).toggle(function(){
        $(checkBox).removeClass("ex_check");
        $(checkBox).addClass("ex_check_on");
        $(itemIdx).css("display","block");
      },function(){
        $(checkBox).removeClass("ex_check_on");
        $(checkBox).addClass("ex_check");
        $(itemIdx).css("display","none");
      });
  });

}); //메인 스크립트 종료
