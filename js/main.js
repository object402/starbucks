$(function() {
  // animation
  section_1();
  section_2();
  noticeSlide();
  promotion();
  // section_3();
  section_4();
  section_5();
  section_6()
  // section_7();
  section_8();
})


//product opacity animation

function section_1() {
  $('.product1 img').css({
    "opacity": '0'
  }).delay(500).animate({
    "opacity": '1'
  }, 'slow');

  $('.product2 img').css({
    "opacity": '0'
  }).delay(1500).animate({
    "opacity": '1'
  }, 'slow');

  $('.product3 img').css({
    "opacity": '0'
  }).delay(1000).animate({
    "opacity": '1'
  }, 'slow');

  $('.givegood img').css({
    "opacity": '0'
  }).delay(1700).animate({
    "opacity": '1'
  }, 'slow');

  $('.main_left').css({
    "opacity": '0',
    "transition": '0s'
  }).delay(1700).animate({
    "opacity": '1',
    "transition": '0.5s'
  }, 'slow');

}

function section_2() {
  $(this).removeClass('active');
  $('.notice').click(function() {
    $('.promotion_slide').stop().slideToggle();
    $(this).toggleClass('active');
    return false;
  })

}

function noticeSlide(){
var height =  $(".left_notice").height();
var num = $(".rolling li").length;
var max = height * num;
var move = 0;
function noticeRolling(){
 move += height;
 $(".rolling").stop().animate({"top":-move},700,function(){
   if( move >= max ){
     $(this).css("top",0);
     move = 0;
   };
 });
};

setInterval(noticeRolling,3000);
$(".rolling").append($(".rolling li").first().clone());
 }



//promotino slide

function promotion() {
    var list = $('.promotion_container');
    var show_num = 1;
    var num = 0;
    var li_width = $('.promotion_container > li:first').width();
    var total = $('.promotion_container > li').length;
    // var trans3d = li_width.css({'transform':'trans3d(-li_width,0,0)'});

    // 복제하는 변수 만들기
    var copyObj = $('li:lt(' + show_num + ')').clone();
    list.append(copyObj);

    //next 버튼 클릭하면 왼쪽으로 슬라이드하기
    $('.button_right').on('click', function() {
      console.log(li_width);
      if (num == total) {
        num = 0;
        list.css('margin-left', 0);
      }
      num++;
      list.stop().animate({
        marginLeft: -li_width * num
      }, 500);

      $('.promotion_dot_button span').removeClass('active-page');
      $('.promotion_dot_button span').eq(num).addClass('active-page');
      if (num == total) {
        $('.promotion_dot_button span').eq(0).addClass('active-page');
      }
      return false;
    })

    //prev 버튼 클릭하면 오른쪽으로 슬라이드하기
    $('.button_left').on('click', function() {
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
}

function section_4() {
  $(window).scroll(function() {
    var pos = $('.section_4').offset().top;
    var top = $(window).scrollTop();
    if (pos >= top + 600) {
      $('.christmas_left img').css({
        "opacity": '0',
        "left": '0px'
      }).delay(1000).animate({
        "opacity": '1',
        "left": '21%'
      }, 1500);


      $(".christmas_right1 a img").css({
        "opacity": '0',
        "right": "-100px"
      }).delay(1000).animate({
        "opacity": '1',
        "right": '39%'
      }, 1500);

      $(".christmas_right2 a img").css({
        "opacity": '0',
        "right": "-100px"
      }).delay(1000).animate({
        "opacity": '1',
        "right": '39%'
      }, 1500);

      $(".christmas_right3 a span").css({
        "opacity": '0',
        "right": "-100px",
        "transition": "0s"
      }).delay(1000).animate({
        "opacity": '1',
        "right": '39%',
        "transition": '0.5s'
      }, 1500);
    }
  })


}


function section_5() {
  $(window).scroll(function() {
    var pos = $('.section_5').offset().top;
    var top = $(window).scrollTop();
    if (pos >= top + 1200) {
      $('.reserved_products img').css({
        "opacity": '0'
      }).delay(2000).animate({
        "opacity": '1'
      }, 1500);
    }
  })


}

function section_6() {
  $(window).scroll(function() {
    var pos = $('.section_6').offset().top;
    var top = $(window).scrollTop();
    if (pos >= top + 1600) {
      $('.favorit_left').css({
        "opacity": '0',
        "left": '-100px'
      }).delay(2500).animate({
        "opacity": '1',
        "left": '0'
      }, 1500);
    }
  })

}

function section_8() {
  $(window).scroll(function() {
    var pos = $('.section_8').offset().top;
    var top = $(window).scrollTop();
    if (pos >= top + 1800) {
      console.log(top);
      $('.store_left').css({
        "opacity": '0'
      }).delay(4000).animate({
        "opacity": '1'
      }, 2000);

      $('.store_right').css({
        "opacity": '0',
        "right": '-100px'
      }).delay(4000).animate({
        "opacity": '1',
        "right": '0'
      }, 2000);
    }
  })

}


// function section_7(){}
// function section_2(){}
// function section_3(){}
