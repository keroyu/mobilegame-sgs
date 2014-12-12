$(document).ready(function(){


var wid = $(window).width(),

	resizeForMobile = function(){

		/*RESIZE FOOTER AGE GUIDE*/
		var a = $('.footer-declaim').width() - 55;
		$('.footer-declaim .txt').css({ 'width': a +'px'});

	},
	/* SUBSTRING FOR CHINESE */
	substrNews = function(wid){

		if( wid < 481 && wid > 320 ) var num = 15;
		if( wid < 321 ) var num = 11;

		$('.news-title li span.text').each(function(){

			var objStr = $(this).text(),
				objLen = objStr.length;
			var newStr = objStr.substring( 0, num );
			if( objStr.slice(-3) != '...' ) newStr = newStr +'...';
			
			$(this).text( newStr );
		})

	}


/* WHEN WINDOW RESIZE */

$(window).resize( function() {
	var wid = $(window).width();
	if( wid < 960 ){
		resizeForMobile();
		substrNews(wid);
	}else{
		$('.declaim').css({ 'width': '450px' });
		resizeForMobile();
	}
});

/* FUNCTIONAL AS WIN LOAD */

resizeForMobile();
if(wid < 481) substrNews(wid);



}); /* JQ DOCUMENT END */


