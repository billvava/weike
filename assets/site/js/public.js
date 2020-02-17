// JavaScript Document
//顶部广告
$(document).ready(function(e) {
    $(".float_ad").slideDown();
	$(".ad_main input").click(function(){
		$(".float_ad").slideUp();
	});
});