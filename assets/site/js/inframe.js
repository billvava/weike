// JavaScript Document
$(document).ready(function(e) {
	var l = $(".nav_left li");
	l.eq(2).click(function(){
		$("html").css({"height":"100%","overflow":"hidden"});
		$("#iframe").css("display","block");
		
		$("#close").css("display","block");
		$("#close button").css("display","block");
		$("#close button").click(function(){
			$("#iframe").css("display","none");
			$("#close").css("display","none");
			$("#close button").css("display","none");
			$("html").css({"height":"auto","overflow":"scroll"});
		});
	});
	$(".already strong").click(function(){
		$("html").css({"height":"100%","overflow":"hidden"});
		$("#iframe").css("display","block");
		$("#close").css("display","block");
		$("#close button").css("display","block");
		$("#close button").click(function(){
			$("#iframe").css("display","none");
			$("#close").css("display","none");
			$("#close button").css("display","none");
			$("html").css({"height":"auto","overflow":"scroll"});
		});
	});
	$(".login_post, .nt_yt strong").click(function(){
		$("html").css({"height":"100%","overflow":"hidden"});
		$("#iframe2").css("display","block");
		$("#close").css("display","block");
		$("#close button").css("display","block");
		$("#close button").click(function(){
			$("#iframe2").css("display","none");
			$("#close").css("display","none");
			$("#close button").css("display","none");
			$("html").css({"height":"auto","overflow":"scroll"});
		});
	});
});