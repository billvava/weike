// JavaScript Document
function loginAreaShow()
{
	$(".LoginWindowOut").show();
	var loginWinWidth=$(window).width();
	var loginWinHeight=$(window).height();
	var leftValue=(loginWinWidth-395)/2;
	var topValue=(loginWinHeight-260)/2;
	$(".LoginWindow").css({"left":leftValue,"top":topValue});
}

$(function(){
	$(".closeWindow").click(function(){
		$(".LoginWindowOut").hide();	
	});	
})
