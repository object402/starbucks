$(document).ready(function() {


  var list = $('.company-slider-view');
  var show_num = 1;
  var num = 0;
  var li_width = $('.company-slider-view > li:first').width();
  var total = $('.company-slider-view > li').length;

  // 복제하는 변수 만들기 
  var copyObj = $('li:lt(' + show_num + ')').clone();
  list.append(copyObj);

  //next 버튼 클릭하면 왼쪽으로 슬라이드하기
  $('.control-next').on('click', function() {
    if (num == total) {
      num = 0;
      list.css('margin-left', 0);
    }
    num++;
    list.stop().animate({
      marginLeft: -li_width * num
    }, 500);

    $('.pagnaition span').removeClass('active-page');
    $('.pagnaition span').eq(num).addClass('active-page');
    if (num == total) {
      $('.pagnaition span').eq(0).addClass('active-page');
    }
    return false;
  })

  //prev 버튼 클릭하면 오른쪽으로 슬라이드하기
  $('.control-prev').on('click', function() {
    if (num == 0) {
      num = total;
      list.css('margin-left', -li_width * num);
    }
    num--;
    list.stop().animate({
      marginLeft: -li_width * num
    }, 500);
    $('.pagnaition span').removeClass('active-page');
    $('.pagnaition span').eq(num).addClass('active-page');
    if (num == total) {
      $('.pagnaition span').eq(0).addClass('active-page');
    }
    return false;
  })


  //그래프 스크립트
  var graph = $('.graph-stick > div > span');
  //기본으로 display-none
  graph.parent().hide();

  $(window).scroll(function() {
    var sc = $(this).scrollTop();
    console.log(sc);
    if (sc > 700) {
      for (var i = 0; i < 9; i++) {
        //각 그래프의 높이 구하기
        var gHeight = graph.eq(i).height();
        // console.log(height);
        graph.eq(i).css({
          height: gHeight
        }).parent().delay(i * 500).show(500);
      }
    }
  })

})
