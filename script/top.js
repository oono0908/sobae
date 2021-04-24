$(function(){
  
function init(){
  $(".main").css("opacity","0"),
  $(".movie").css("opacity","0"),
  $(".interview").css("opacity","0"),
  $(".character").css("opacity","0"),
  $(".staff").css("opacity","0"),
  $(".thema").css("opacity","0")
}

init();

$(".bg-container").scroll(function() {
  const size = $(this).scrollTop() * 0.001 + 1
  const blur = $(this).scrollTop() * 0.01 + 1
  $(".top-bgImage").css("transform", 'scale('+ size +')');
  $(".top-bgImage").css("filter",'blur('+ blur +'px)');
});

 const thisOffset1 = $('.main').offset().top
 const thisOffset2 = thisOffset1 + 150
 const thisOffset3 = thisOffset2 + 250

 const thisOffset4 = $('.interview').offset().top
 const thisOffset5 = thisOffset4 + 200
 const thisOffset6 = thisOffset5 + 200
 const thisOffset7 = thisOffset6 + 200

 const thisOffset8 = $('.main').offset().top - 300
 const thisOffset9 = $('.movie').offset().top- 300
 const thisOffset10 = $('.thema').offset().top- 300
 const thisOffset11 = $('.character').offset().top- 300
 const thisOffset12 = $('.staff').offset().top- 300

 $(".bg-container").scroll(function () {
  if ($(this).scrollTop()  > thisOffset8) {
    $(".main").css("opacity", "1")
  };
});

$(".bg-container").scroll(function () {
  if ($(this).scrollTop()  > thisOffset9) {
    $(".movie").css("opacity", "1")
  };
});

$(".bg-container").scroll(function () {
  if ($(this).scrollTop()  > thisOffset10) {
    $(".thema").css("opacity", "1")
  };
});

$(".bg-container").scroll(function () {
  if ($(this).scrollTop()  > thisOffset11) {
    $(".character").css("opacity", "1")
  };
});

$(".bg-container").scroll(function () {
  if ($(this).scrollTop()  > thisOffset4) {
    $(".interview").css("opacity", "1")
  };
});

$(".bg-container").scroll(function () {
  if ($(this).scrollTop()  > thisOffset12) {
    $(".staff").css("opacity", "1")
  };
});



$(".bg-container").scroll(function () {
  if ($(this).scrollTop()  > thisOffset1) {
    $(".bg-txt__font1-bg").css("opacity", "1")
    $(".bg-txt__font2-bg").css("opacity", "1")
  }
});

$(".bg-container").scroll(function () {
  if ($(this).scrollTop()  > thisOffset2){
      $(".bg-txt__font3-bg").css("opacity", "1")
      $(".bg-txt__font4-bg").css("opacity", "1")
      $(".bg-txt__font5-bg").css("opacity", "1")
  } 
});

$(".bg-container").scroll(function () {
  if($(this).scrollTop()  > thisOffset3){ 
      $(".bg-txt__font6-bg").css("opacity", "1")
  }
});

$(".bg-container").scroll(function () {
  if($(this).scrollTop()  > thisOffset4){ 
      $(".interview__bg-point1").css("opacity", "1")
  }
});

$(".bg-container").scroll(function () {
  if($(this).scrollTop()  > thisOffset5){ 
      $(".interview__bg-point2").css("opacity", "1")
  }
});

$(".bg-container").scroll(function () {
  if($(this).scrollTop()  > thisOffset6){ 
      $(".interview__bg-point3").css("opacity", "1")
  }
});

$(".bg-container").scroll(function () {
  if($(this).scrollTop()  > thisOffset7){ 
      $(".interview__bg-point4").css("opacity", "1")
  }
});
  
$(".movie-wrapper1").click(function(){
  if($(window).width() <= 1080 ){
    $(".movie__play1").css('transform','translate(-50%,-50%) scale(0.6)');
  } else {
    
  };
  $(".movie-cover1").css('display','block');
  setTimeout(function(){
    $(".movie-yutube-wrapper").addClass("movie_active");
    $(".yutube-inner1").addClass("movie_active");
    $(".bg-container").css('overflow','hidden');
  },700);
});
$(".btn").click(function(){
  $(".movie-yutube-wrapper").removeClass("movie_active")
  $(".yutube-inner1").removeClass("movie_active")
  $(".bg-container").css('overflow','scroll');
  if($(window).width() <= 1080 ){
    $(".movie__play1").css('transform','translate(-50%,-50%) scale(0.4)');
  } else {
}
  $(".movie-cover1").css('display','none');
  $(".movie__play1").removeClass("movie-scale");
});

$(".movie-wrapper2").click(function(){
  if($(window).width() <= 1080 ){
    $(".movie__play2").css('transform','translate(-50%,-50%) scale(0.6)');
  } else {
    // $(".movie__play2").removeClass("movie__play-hover");
  };

  $(".movie-cover2").css('display','block');
  setTimeout(function(){
    $(".movie-yutube-wrapper").addClass("movie_active");
    $(".yutube-inner2").addClass("movie_active");
    $(".bg-container").css('overflow','hidden');
  },700);
  
});
$(".btn").click(function(){
  $(".movie-yutube-wrapper").removeClass("movie_active")
  $(".yutube-inner2").removeClass("movie_active")
  $(".bg-container").css('overflow','scroll');
  if($(window).width() <= 1080 ){
    $(".movie__play2").css('transform','translate(-50%,-50%) scale(0.4)');
  } else {
    // $(".movie__play2").toggleClass("movie__play-hover");
  }
  $(".movie-cover2").css('display','none');
});

playHover();

function playHover() { $(".movie-wrapper").hover(function(){
  $(this).find(".movie__play").toggleClass("movie__play-hover");
});
}

$(".movie-wrapper").hover(function(){
  $(this).find(".movie-cover-hover").toggleClass("movie-cover-hover-active");
});

const movieTop = $(".top-bg-wrapper").outerHeight(true) + $(".main").outerHeight(true)
const themaTop = movieTop + $(".movie").outerHeight(true) 
const characterTop = themaTop + $(".thema").outerHeight(true) 

const moveArray = [
  {btn: ".movie-btn", animate: movieTop},
  {btn: ".thema-btn", animate: themaTop},
  {btn: ".character-btn", animate: characterTop}
]
$.each(moveArray, function(index, value){
  $("" + value.btn).click(function() {
    var speed = 1000;
    $('.bg-container').animate({scrollTop:value.animate}, speed, 'swing');
    return false;
  });
});

});
