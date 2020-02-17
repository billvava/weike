// JavaScript Document

//游戏-热门游戏
$(document).ready(function(e) {
    var tab = $(".game_hotgame li");
	tab.hover(function(){
		var index = $(this).index();
		$(".game_hotGame").eq(index).slideToggle(150);
	});
});

//游戏筛选列表
$(document).ready(function(e) {
   i = $(".choice_list");
   var l = $("#choice_letter li");
   var c = $("#choice_class li");
   var f = $("#choice_feature li");
   var d = $("#choice_date li");
   i.each(function(){
		var li = $(this).children("li:first");//获取每个ul的第一个li
		li.addClass("game_choiceLi_hover");//改变第一个li的样式
	});
	l.click(function(){
		var index1 = $(this).index()//获取字母查找li位置
		l.eq(index1).addClass("game_choiceLi_hover");//改变选中li的样式
		l.removeClass("game_choiceLi_hover").eq(index1).addClass("game_choiceLi_hover");//去除之前选中项的样式
	});
	c.click(function(){
		var index2 = $(this).index()//获取类型查找li位置
		c.eq(index2).addClass("game_choiceLi_hover");//改变选中li的样式
		c.removeClass("game_choiceLi_hover").eq(index2).addClass("game_choiceLi_hover");//去除之前选中项的样式
	});
	f.click(function(){
		var index3 = $(this).index()//获取特征查找li位置
		f.eq(index3).addClass("game_choiceLi_hover");//改变选中li的样式
		f.removeClass("game_choiceLi_hover").eq(index3).addClass("game_choiceLi_hover");//去除之前选中项的样式
	});
	d.click(function(){
		var index4 = $(this).index()//获取特征查找li位置
		d.eq(index4).addClass("game_choiceLi_hover");//改变选中li的样式
		d.removeClass("game_choiceLi_hover").eq(index4).addClass("game_choiceLi_hover");//去除之前选中项的样式
	});
});


//充值到哪
/*$(document).ready(function(e) {
	var l = $(".pay_to label");
	var x = $(".pay_to li");
	l.eq(0).addClass("pay_click")
	x.click(function(){
		var index = $(this).index();
		l.eq(index).addClass("pay_click")
		l.removeClass("pay_click").eq(index).addClass("pay_click");
	});
});
*/
//充值金额
/*$(document).ready(function(e) {
	var l = $(".pay_money label");
	var x = $(".pay_money li");
	l.eq(0).addClass("pay_click")
	x.click(function(){
		var index = $(this).index();
		l.eq(index).addClass("pay_click")
		l.eq(index).siblings().css("font-weight","normal");
		l.removeClass("pay_click").eq(index).addClass("pay_click");
	});
	$(".other_money").focus(function(){
		$(".other span").css("display","block");
	});
	$(".other_money").blur(function(){
		$(".other span").css("display","none");
	});
});*/

//选择游戏、区
$(document).ready(function(e) {
	var li1 = $(".pay_game li")
	var input1 = $("#pay_game input")
	var li2 = $(".pay_suit li")
	var input2 = $("#pay_suit input")
    input1.click(function(){
		$(".pay_game").fadeToggle();//游戏选择列表淡入淡出
		$("#choice_span").css("display","none");//选择游戏名称时，提示自动隐藏
		$(".pay_suit").fadeOut();
		li1.click(function(){
			$(".pay_game").fadeOut();//当游戏被选中时，游戏列表淡出
			$("#choice_span").css("display","none");//选择游戏名称时，提示自动隐藏
			var index1 = $(this).index();
			var txt1 = li1.eq(index1).text();//获取被选中的游戏名称
			input1.addClass("pay_hover");//更改选择框背景
			$("#pay_game label").html(txt1);//显示选中的游戏
			$("#pay_game label").val(txt1);
			$(".pay_suit").fadeIn();//选择游戏后服务器列表淡入
			li2.click(function(){
				$(".pay_suit").fadeOut();//当服务器被选中时，游戏列表淡出
				var index2 = $(this).index();
				var txt2 = li2.eq(index2).text();//获取被选中的服务器名称
				input2.addClass("pay_hover");//更改选择框背景
				$("#pay_suit label").html(txt2);//显示选中的区
			});
		});
	});
	input2.click(function(){
		if($("#pay_game label").val() == "")
		{
			$("#choice_span").css("display","block");//如果未选择游戏，则点击服务器选择出现提示语言
		}
		else
		{
			$(".pay_suit").fadeIn();
		}
	});
});


//活动状态
$(document).ready(function(e) {
    var tab = $(".activityTi li");
	tab.eq(0).toggleClass("active");//初始默认选中列表第一个选项
	var li = $(".activity_list");
	li.eq(0).css("display","block");
	tab.click(function(){
		var index = $(this).index();
		tab.eq(index).addClass("active");
		tab.removeClass("active").eq(index).addClass("active");
		li.eq(index).css("display","block");
		li.eq(index).siblings().css("display","none");
	});
});

//正在进行倒计时
function leftEndtime(){
          $(".lefttime").each(function(){
                var leftday=$(this).attr("leftday");//用来判断是否显示天数的变量
                var endtime = new Date($(this).attr("endtime")).getTime();//取结束日期(毫秒值)
                var nowtime = new Date().getTime();        //今天的日期(毫秒值)
                var youtime = endtime-nowtime;//还有多久(毫秒值)
                var seconds = youtime/1000;
                var minutes = Math.floor(seconds/60);
                var hours = Math.floor(minutes/60);
                var days = Math.floor(hours/24);
                var CDay= days ;
                var CHour= hours % 24;
                var CMinute= minutes % 60;
                var CSecond= Math.floor(seconds%60);//"%"是取余运算，可以理解为60进一后取余数，然后只要余数。
				if(endtime>=nowtime){
					if($(this).attr("lefttime")=="no"){
						$(this).html("<i>剩余时间：</i><span>"+CHour+"</span>时</span>"+CMinute+"</span>分<span>"+CSecond+"</span>秒");//输出带天数的时间
					}
					else{
						$(this).html("<i>剩余时间：</i><span>"+days+"</span><em>天</em><span>"+CHour+"</span><em>时</em><span>"+CMinute+"</span><em>分</em><span>"+CSecond+"</span><em>秒</em>");//输出不带天数的时间
					}
				}
                
   });
   setTimeout("leftEndtime()",1000);
  };
$(function(){
      leftEndtime();
});


//正在进行倒计时
function leftStarttime(){
          $(".cometime").each(function(){
                var leftday=$(this).attr("leftday");//用来判断是否显示天数的变量
                var endtime = new Date($(this).attr("starttime")).getTime();//取结束日期(毫秒值)
                var nowtime = new Date().getTime();        //今天的日期(毫秒值)
                var youtime = endtime-nowtime;//还有多久(毫秒值)
                var seconds = youtime/1000;
                var minutes = Math.floor(seconds/60);
                var hours = Math.floor(minutes/60);
                var days = Math.floor(hours/24);
                var CDay= days ;
                var CHour= hours % 24;
                var CMinute= minutes % 60;
                var CSecond= Math.floor(seconds%60);//"%"是取余运算，可以理解为60进一后取余数，然后只要余数。
				if(endtime>=nowtime){
					if($(this).attr("lefttime")=="no"){
						$(this).html("<i>即将开始：</i><span>"+CHour+"</span>时</span>"+CMinute+"</span>分<span>"+CSecond+"</span>秒");//输出带天数的时间
					}
					else{
						$(this).html("<i>即将开始：</i><span>"+days+"</span><em>天</em><span>"+CHour+"</span><em>时</em><span>"+CMinute+"</span><em>分</em><span>"+CSecond+"</span><em>秒</em>");//输出不带天数的时间
					}
				}
                
   });
   setTimeout("leftStarttime()",1000);
  };
$(function(){
      leftStarttime();
});

/*选择服务器*/
$(document).ready(function(e) {
    var l = $(".suit a").length;
	if(l >28){
		$(".suit").css("overflow-y","scroll");
	}
});


/*信息选择*/
/*$(document).ready(function(e) {
    var li = $(".user_ti li");
	var div = $(".profile");
	li.eq(0).toggleClass("tab_active");
	li.eq(0).siblings().toggleClass("tab_normal");
	div.eq(0).css("display","block");
	li.click(function(){
		var index = $(this).index();
		li.eq(index).addClass("tab_active");
		li.eq(index).removeClass("tab_normal");
		li.removeClass("tab_active").eq(index).addClass("tab_active");
		li.eq(index).siblings().addClass("tab_normal");
		div.eq(index).css("display","block");
		div.eq(index).siblings(".profile").css("display","none");
	});
});
*/
/*个人资料选项卡*/
$(document).ready(function(e) {
    var li = $(".tab li");
	var div = $(".b_d");
	li.eq(0).toggleClass("cur");
	div.eq(0).css("display","block");
	li.click(function(){
		var index = $(this).index();
		li.eq(index).addClass("cur");
		li.removeClass("cur").eq(index).addClass("cur");
		div.eq(index).css("display","block");
		div.eq(index).siblings(".b_d").css("display","none");
	});
});

/*头像预览*/
$(document).ready(function(e) {
    var li = $(".sys_hp li img");
	li.click(function(){
		var index = $(this).index();
		var src = $(this).eq(index).attr("src");
		$(".big").attr("src",src);
		$(".small").attr("src",src);
        $(".MyPhoto").val(src);
	});
});

/*消息*/
$(document).ready(function(e) {
    var li = $(".tab1 li");
	var div = $(".msg_li");
	li.eq(0).toggleClass("cur");
	div.eq(0).css("display","block");
	li.click(function(){
		var index = $(this).index();
		li.eq(index).addClass("cur");
		li.removeClass("cur").eq(index).addClass("cur");
		div.eq(index).css("display","block");
		div.eq(index).siblings(".msg_li").css("display","none");
	});
});

/*密码问题*/
$(document).ready(function(e) {
    var input = $("#other");
	input.css("display","none");
	var op = $(".p_p select");
	op.change(function(){
		var val=$(this).val();
		if(val == "其他"){
			input.css("display","inline-block");
		}
		else{
			input.css("display","none");
		}
	});
});

/*消息中心*/
$(document).ready(function(e) {
    var li = $("#all li");
	li.click(function(){
		var index = $(this).index();
		var h = $("#letter").eq(index).height();
		if($("#letter").eq(index).css("display")=="none"){
			$("#letter").eq(index).css("display","block");
			li.eq(index+1).css("margin-top",h);
		}
		else{
			$("#letter").eq(index).css("display","none");
			li.eq(index+1).css("margin-top","0px");
		}
	});
});

/*客服问题*/
$(document).ready(function(e) {
    var li = $(".cs_ti li");
	var div = $(".cs_find");
	li.eq(0).toggleClass("tab_active");
	li.eq(0).siblings().toggleClass("tab_normal");
	div.eq(0).css("display","block");
	li.click(function(){
		var index = $(this).index();
		li.eq(index).addClass("tab_active");
		li.eq(index).removeClass("tab_normal");
		li.removeClass("tab_active").eq(index).addClass("tab_active");
		li.eq(index).siblings().addClass("tab_normal");
		div.eq(index).css("display","block");
		div.eq(index).siblings(".cs_find").css("display","none");
	});
});

/*问题表单*/
$(document).ready(function(e) {
	var role = $("#role");
	var email = $("#email");
	var tel = $("#tel");
	var problem = $("#problem");
	var input = $(".cs_form input");
	role.blur(function(){
		if(role.val() == ""){
			$("#role1 span").show();
		}
		else{
			$("#role1 span").hide();
		}
	});
	email.blur(function(){
		if(email.val() == ""){
			$("#email1 span").show();
		}
		else{
			$("#email1 span").hide();
		}
	});
	tel.blur(function(){
		if(tel.val() == ""){
			$("#tel1 span").show();
		}
		else{
			$("#tel1 span").hide();
		}
	});
	problem.blur(function(){
		if(problem.val() == ""){
			$("#problem1 span").show();
		}
		else{
			$("#problem1 span").hide();
		}
	});
});

$(document).ready(function(e) {
	var x = $(".label_n input");
	x.click(function(){
		var val = $(this).val();
		if(val == "pro2"){
			$("#land_pro").css("display","block");
			$("#land_pro").siblings(".form_classify").css("display","none");
		}
		else if(val == "pro3"){
			$("#thing_pro").css("display","block");
			$("#thing_pro").siblings(".form_classify").css("display","none");
		}
		else if(val == "pro5"){
			$("#pay_pro").css("display","block");
			$("#pay_pro").siblings(".form_classify").css("display","none");
		}
		else if(val == "pro6"){
			$("#active_pro").css("display","block");
			$("#active_pro").siblings(".form_classify").css("display","none");
		}
		else{
			$(".form_classify").css("display","none");
		}
	});
});

//游戏充值方式选择
$(document).ready(function(e) {
    var li = $(".pay_left li");
	var detail = $(".pay_method_detail");
	li.eq(0).toggleClass("pay_method_active");
	detail.eq(0).css("display","block");
	li.click(function(){
		var index = $(this).index();
		li.eq(index).addClass("pay_method_active");
		li.removeClass("pay_method_active").eq(index).addClass("pay_method_active");
		detail.eq(index).css("display","block");
		detail.eq(index).siblings(".pay_method_detail").css("display","none");
	});
});

//充值确认
$(document).ready(function(e) {
    $(".pay_sub input").click(function(){
		$(".wrap").css("display","block");
		var button  = $(".floatPay_button");
		var button1 = $("#pay_button1 button");
		var button2 = $("#pay_button2 button");
		var button3 = $("#pay_button3 button");
		button.eq(0).css("display","block");
		button1.click(function(){
			var index = $(this).index();
			if(index == 0){
				button.eq(0).css("display","none");
				button.eq(1).css("display","block");
			}
			else{
				$(".wrap").css("display","none");
			}
		});
		button2.click(function(){
			var index = $(this).index();
			if(index == 0){
				$(".pay_state").css("visibility","visible");
				button.eq(1).css("display","none");
				button.eq(2).css("display","block");
			}
			else{
				$(".wrap").css("display","none");
			}
		});
		button3.click(function(){
			$(".wrap").css("display","none");
		});
	});
});

//商城banner轮播
$(document).ready(function(e) {  
	var defaultOpts = { interval: 4000, fadeInTime: 300, fadeOutTime: 200 };
	var x = $(".banner_hover li");
	var y = $(".banner li");
	var _count = x.length;//获取banner个数
	var _current = 0;//初始从1开始
	var _intervalID = null;
	x.eq(0).toggleClass("cur");//网页加载完成是第一个按钮为current状态
	var stop = function() { window.clearInterval(_intervalID); };
	var slide = function(opts) {
 		if (opts) {
  			_current = opts.current || 0;
 		} else {
  			_current = (_current >= (_count - 1)) ? 0 : (++_current);
 		};
  		y.filter(":visible").fadeOut(defaultOpts.fadeOutTime, function() {
  			y.eq(_current).fadeIn(defaultOpts.fadeInTime);
 		});
 		x.removeClass("cur").eq(_current).addClass("cur");//对应的按钮改变class
	};
	var go = function() {
 		stop();
 		_intervalID = window.setInterval(function() { slide(); }, defaultOpts.interval);
	}; 
	var itemMouseOver = function(target, items) {
 		stop();
 		var i = $.inArray(target, items);
 		slide({ current: i });
	}; 
	x.hover(function() { if($(this).attr('class')!='cur'){itemMouseOver(this, x); }else{stop();}}, go);//鼠标移至按钮上，则停止播放，移开则开始
	y.hover(stop, go);
	go();
});

//商城记录表格
$(document).ready(function(e) {
    $(".order tbody tr:even").addClass("trBg1");
	$(".order_det tbody tr:even").addClass("trBg1");
	$(".order tbody tr:odd").addClass("trBg2");
	$(".order_det tbody tr:odd").addClass("trBg2");
	$(".order_det tbody tr").each(function(index, element) {
        $(this).find("td:first").css("text-align","right");
    });
});

//商城全部商品排序
$(document).ready(function(e) {
    var a = $(".sort_name a");
	a.eq(0).toggleClass("sort_cur");
	a.click(function(){
		var index = $(this).index();
		a.eq(index).addClass("sort_cur");
		a.removeClass("sort_cur").eq(index).addClass("sort_cur");
	});
});


//点击兑换
$(document).ready(function(e) {
	$(".pv_info a").click(function(){
		var box = $(".prompt_box");
		box.css("display","block");
		$(".prom_content").eq(0).css("display","block");
		$(".prom_content button").click(function(){
			box.css("display","none");
		});
	});
});

//签到弹框
$(document).ready(function(e) {
    $(".login_other_msg input").click(function(){
		$(".overlay").css("display","block");
		$(".close_sign").click(function(){
			$(".overlay").css("display","none");
		});
	});
});

$(document).ready(function(e) {
	$("#entSuc a").click(function(){
		var box = $(".prompt_box");
		box.css("display","block");
		$("#prom_entSuc").css("display","block");
		$("#prom_entSuc button").click(function(){
			box.css("display","none");
		});
	});
});