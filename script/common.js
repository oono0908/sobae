$(function(){

  $(".nav-btn").click(function(){
    $(".nav-btn__item").toggleClass("nav__open")
    $(".nav-inner__bg").toggleClass("nav-inner__bg_active")
    $(".nav-inner__list").toggleClass("nav-inner__list_active")
    if ($(".nav-inner__list").hasClass("nav-inner__list_active") && $(window).width() <= 1080){
      $(".nav-inner__list").fadeIn(500)
    } else if (!$(".nav-inner__list").hasClass("nav-inner__list_active") && $(window).width() <= 1080) {
      $(".nav-inner__list").fadeOut(500)
    } 
  });

const btnArray = [
{btn: ".movie-btn"},
{btn: ".thema-btn"},
{btn: ".character-btn"}
]

$.each(btnArray, function(index, value){
  $("" + value.btn).click(function(){
    if($(window).width() <= 1080 ){
      $(".nav-btn__item").removeClass("nav__open")
      $(".nav-inner__bg").removeClass("nav-inner__bg_active")
      $(".nav-inner__list").removeClass("nav-inner__list_active")
      if ($(".nav-inner__list").hasClass("nav-inner__list_active") && $(window).width() <= 1080){
        $(".nav-inner__list").fadeIn(500)
      } else if (!$(".nav-inner__list").hasClass("nav-inner__list_active") && $(window).width() <= 1080) {
        $(".nav-inner__list").fadeOut(500)
      } 
    }
  })
})

  const thisOffset1 = $('article').offset().top

  $(".bg-container").scroll(function () {
    if ($(this).scrollTop()  > thisOffset1) {
      $(".to-top-btn").css("opacity", "1")
    } else {
      $(".to-top-btn").css("opacity", "0")
    }
  });

  $(".nav-inner__item").hover(function(){
    $(this).toggleClass("move");
  })

  $(".to-top-btn").hover(function(){
    $(".txt").toggleClass("move");
  })
  
  $('.top-link').click(function() {
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('.bg-container').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
  
  const modalArray = [
    {modal: ".news-modal1", list: ".news-list__item1"},
    {modal: ".news-modal2", list: ".news-list__item2"},
    {modal: ".news-modal3", list: ".news-list__item3"}
  ]

  $.each(modalArray, function(index, value){

  $("" + value.list).click(function() {
    $("" + value.modal).fadeIn("slow");
    $("" + value.modal).css("position","fixed")
    $(".bg-container").css('overflow','hidden');
  })
  $(".news-modal__btn").click(function() {
    $("" + value.modal).fadeOut("slow");
    $(".bg-container").css("overflow","scroll")
  })
})

});