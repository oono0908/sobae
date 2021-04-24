$(function(){
  
let array = [
  {wrapper: ".movie-wrapper1", movie: ".movie1"},
  {wrapper: ".movie-wrapper2", movie: ".movie2"},
  {wrapper: ".movie-wrapper3", movie: ".movie3"}
]

$.each(array, function(index, value){
  $("" + value.wrapper).click(function(){
    if($(window).width() <= 1080 ){
      $(this).find(".movie-wrapper__play-btn").css('transform','translate(-50%,-50%) scale(0.7)');
    }
    let $wrapper = $(this).find(".movie-cover");
    $(this).addClass("box-shadow-widen");
    $wrapper.css("display", "block");
  
    setTimeout(function(){
      $(".movie-bg").addClass("movie_active");
      $("" + value.movie).addClass("movie_active");
      $(".bg-container").css('overflow','hidden');
    },600);
  });
  $(".btn").click(function(){
    if($(window).width() <= 1080 ){
      $(".movie-wrapper__play-btn").css('transform','translate(-50%,-50%) scale(0.5)');
    }
    $("" + value.wrapper).removeClass("box-shadow-widen");
    $(".movie-cover").css("display", "none");
    $(".movie-bg").removeClass("movie_active")
    $("" + value.movie).removeClass("movie_active")
    $(".bg-container").css('overflow','scroll');
  });
})

$('.movie-wrapper').rippleria({
  duration: 160,
  easing: 'ease-in'
});

$('.movie-wrapper').click(function(e) {
  e.preventDefault();
  var randInt = function (min, max) {
  var rand = min + Math.random() * (max - min)
  rand = Math.round(rand);
  return rand;
};
$(this).rippleria('changeColor',
      'rgba('+randInt(0,200)+','+randInt(0,200)+','+randInt(0,200)+',0.'+randInt(3,5));
});
});