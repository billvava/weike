// JavaScript Document
//发起申诉
$(function(){
	$(".d_faqi > li").click(function(){
		var $faqi = $(this).index();
		$(this).addClass("d_shensu").siblings()
		.removeClass("d_shensu");
		
		$(".d_xinxi > div").eq($faqi).show()
		.siblings().hide();	
	});	
});

//收支明细
$(function(){
		$(".d_szmx > li").click(function(){
			var $mx = $(this).index();
			
			$(this).addClass("ming").siblings()
				.removeClass("ming");
				
			$(".d_cq > div").eq($mx).show()
			.siblings().hide();	
		});	
	});
	
//充值
$(function(){
	$(".d_zhcz li").click(function(){
		var $thiscz = $(this).index();
		$(this).addClass("yh").siblings()
			.removeClass("yh");
			
		$(".d_yhyinchang > div").eq($thiscz).show()
		.siblings().hide();
	});	
});