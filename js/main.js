
$(function(){
  // animation
  section_1();
  section_2();
  promotion();
  // section_3();
  section_4();
  section_5();
  section_6()
  section_7();
  section_8();
})


//product opacity animation

function section_1(){
  $('.product1 img').css({"opacity":'0'}).delay(500).animate({"opacity":'1'},'slow');

  $('.product2 img').css({"opacity":'0'}).delay(1500).animate({"opacity":'1'},'slow');

  $('.product3 img').css({"opacity":'0'}).delay(1000).animate({"opacity":'1'},'slow');

  $('.givegood img').css({"opacity":'0'}).delay(1700).animate({"opacity":'1'},'slow');

  $('.main_left').css({"opacity":'0',"transition":'0s'}).delay(1700).animate({"opacity":'1',"transition":'0.5s'},'slow');

}

function section_2(){
     $(this).removeClass('active');
    $('.notice').click(function(){
        $('.promotion_slide').stop().slideToggle();
        $(this).toggleClass('active');
        return false;
    })
}

// promotino slide

function promotion(){

    var i=0;
    setInterval(function(){
        i++
      $('.promotion_container').delay(1000).animate({left:-(819*i)},500);
      if(i==4){
        $('.promotion_container').delay(1000).animate({left:0*i},500);
        i=0;
      }
    })

}

function section_4(){
  $(window).scroll(function(){
    var pos = $('.section_4').offset().top;
    var top = $(window).scrollTop();
    if(pos>=top+600){
      $('.christmas_left img').css({"opacity":'0',"left":'0px'}).delay(1000).animate({"opacity":'1',"left":'21%'},1500);


      $(".christmas_right1 a img").css({"opacity":'0',"right":"-100px"}).delay(1000).animate({"opacity":'1',"right":'39%'},1500);

        $(".christmas_right2 a img").css({"opacity":'0',"right":"-100px"}).delay(1000).animate({"opacity":'1',"right":'39%'},1500);

          $(".christmas_right3 a span").css({"opacity":'0',"right":"-100px","transition":"0s"}).delay(1000).animate({"opacity":'1',"right":'39%',"transition":'0.5s'},1500);
    }
  })


}


function section_5(){
  $(window).scroll(function(){
    var pos = $('.section_5').offset().top;
    var top = $(window).scrollTop();
    if(pos>=top+1200){
        $('.reserved_products img').css({"opacity":'0'}).delay(2000).animate({"opacity":'1'},1500);
    }
  })


}

function section_6(){
  $(window).scroll(function(){
    var pos = $('.section_6').offset().top;
    var top = $(window).scrollTop();
    if(pos>=top+1600){
  $('.favorit_left').css({"opacity":'0',"left":'-100px'}).delay(2500).animate({"opacity":'1',"left":'0'},1500);
    }
  })

}

function section_8(){
  $(window).scroll(function(){
    var pos = $('.section_8').offset().top;
    var top = $(window).scrollTop();
    if(pos>=top+1800){
          console.log(top);
        $('.store_left').css({"opacity":'0'}).delay(4000).animate({"opacity":'1'},2000);

          $('.store_right').css({"opacity":'0',"right":'-100px'}).delay(4000).animate({"opacity":'1',"right":'0'},2000);
    }
  })

}


// function section_7(){}
// function section_2(){}
// function section_3(){}
