
$(function(){
  // animation
  section_1();
  section_4();
  section_5();
  // section_7();
  section_8();



})


//product opacity animation

function section_1(){
  $('.product1 img').css({"opacity":'0'}).delay(500).animate({"opacity":'1'},'slow');

  $('.product2 img').css({"opacity":'0'}).delay(1500).animate({"opacity":'1'},'slow');

  $('.product3 img').css({"opacity":'0'}).delay(1000).animate({"opacity":'1'},'slow');

  $('.givegood img').css({"opacity":'0'}).delay(1700).animate({"opacity":'1'},'slow');

  $('.givegood a span').css({"opacity":'0',"transition":'0s'}).delay(1700).animate({"opacity":'1',"transition":'0.5s'},'slow');

}


function section_4(){
  $('.christmas_left img').css({"opacity":'0',"left":'-100px'}).delay(1000).animate({"opacity":'1',"left":'21%'},1500);


  $(".christmas_right1 a img").css({"opacity":'0',"right":"-100px"}).delay(1000).animate({"opacity":'1',"right":'39%'},1500);

    $(".christmas_right2 a img").css({"opacity":'0',"right":"-100px"}).delay(1000).animate({"opacity":'1',"right":'39%'},1500);

      $(".christmas_right3 a span").css({"opacity":'0',"right":"-100px","transition":"0s"}).delay(1000).animate({"opacity":'1',"right":'39%',"transition":'0.5s'},1500);

}


function section_5(){
  $('.reserved_products img').css({"opacity":'0'}).delay(1500).animate({"opacity":'1'},1500);

}

function section_6(){

}

// function section_7(){
//
// }
//

// function section_2{}
// function section_3{}


function section_8(){

  $('.store_find_left img').css({"opacity":'0'}).delay(1500).animate({"opacity":'1'},'slow');

    $('.store_find_right').css({"opacity":'0',"right":'-21%'}).delay(1500).animate({"opacity":'1',"right":'21%'},1500);
}
