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

  var graph = $('.graph-stick > div > span');
  graph.parent().hide();


  $(window).scroll(function() {
    var sc = $(this).scrollTop();
    console.log(sc);
    if (sc > 700) {
      graph.eq(0).css({
        height: 52
      }).parent().show(500);
      graph.eq(1).css({
        height: 145
      }).parent().delay(500).show(500);
      graph.eq(2).css({
        height: 149
      }).parent().delay(1000).show(500);
      graph.eq(3).css({
        height: 151
      }).parent().delay(1500).show(500);
      graph.eq(4).css({
        height: 153
      }).parent().delay(2000).show(500);
      graph.eq(5).css({
        height: 157
      }).parent().delay(2500).show(500);
      graph.eq(6).css({
        height: 178
      }).parent().delay(3000).show(500);
      graph.eq(7).css({
        height: 209
      }).parent().delay(3500).show(500);
      graph.eq(8).css({
        height: 204
      }).parent().delay(4000).show(500);


    }
  })

})
