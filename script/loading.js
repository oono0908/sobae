$(function(){

	function loadImages(){
		var srcList = []; 
    var loadIndex = 0;

		function complete(){
			$('#loading').fadeOut(500, function(){
				$('#loading').remove();
			});
    };
    
		function loaded(){
			if( loadIndex != (srcList.length-1) ){
				loadIndex++;
        imgLoad();
			}else{
        setTimeout(function(){
        complete();
      },2000);
      };
    };
    
		function imgLoad(){
			var img = new Image();
      $(img).on('load', loaded).attr('src', srcList[loadIndex]);
    }

		function init(){
      $('#loading').css("position","fixed")
			$('body').find('img').each(function(index){
				srcList[index] = $(this).attr('src');
      });
      
			imgLoad();
    };
    
		init();
  };
  
  loadImages();
  
});