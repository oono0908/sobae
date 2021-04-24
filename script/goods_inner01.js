$(function(){
  $(".list__item-img").click(function(){
    var dataUrl = $(this).attr('data-url');
    $(".goods-top-image").attr('src',dataUrl);
    $(".list__item").css("background-color","transparent")
    $(this).parent().css('background-color',"white");
  });
});