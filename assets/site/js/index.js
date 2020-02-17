// JavaScript Document

//banner轮播
$(document).ready(function(e) {  
	var defaultOpts = { interval: 4000, fadeInTime: 300, fadeOutTime: 200 };
	var x = $(".banner_hover li");
	var y = $(".home_banner li");
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

//页首新闻轮播
$(document).ready(function(e) {
    function $(element){
 if(arguments.length>1){
  for(var i=0,length=arguments.length,elements=[];i<length;i++){
   elements.push($(arguments[i]));
  }
  return elements;
 }
 if(typeof element=="string"){
  return document.getElementById(element);
 }else{
  return element;
 }
}
var Class={
 create:function(){
  return function(){
   this.initialize.apply(this,arguments);
  }
 }
}
Function.prototype.bind=function(object){
 var method=this;
 return function(){
  method.apply(object,arguments);
 }
}
var Scroll=Class.create();
Scroll.prototype={
 initialize:function(element,height){
  this.element=$(element);
  this.element.innerHTML+=this.element.innerHTML;
  this.height=height;
  this.maxHeight=this.element.scrollHeight/2;
  this.counter=0;
  this.scroll();
  this.timer="";
  this.element.onmouseover=this.stop.bind(this);
  this.element.onmouseout=function(){this.timer=setTimeout(this.scroll.bind(this),1000);}.bind(this);
 },
 scroll:function(){
  if(this.element.scrollTop<this.maxHeight){
   this.element.scrollTop++;
   this.counter++;
  }else{
   this.element.scrollTop=0;
   this.counter=0;
  }
  if(this.counter<this.height){
   this.timer=setTimeout(this.scroll.bind(this),24);
  }else{
   this.counter=0;
   this.timer=setTimeout(this.scroll.bind(this),3000);
  }
 },
 stop:function(){
  clearTimeout(this.timer);
 }
}
var myscroll=new Scroll("myscroll",20);	
});

//首页右侧资讯
$(document).ready(function(e) {
    var tab = $(".home_tab li");
	tab.eq(0).toggleClass("home_tabLi");
	var li = $(".home_right_li");
	li.eq(0).css("display","block");
	tab.mouseover(function(){
		var index = $(this).index();
		tab.eq(index).addClass("home_tabLi");
		tab.removeClass("home_tabLi").eq(index).addClass("home_tabLi");
		li.eq(index).css("display","block");
		li.eq(index).siblings().css("display","none");
	});
});

//下次自动登录
$(document).ready(function(e) {
    var x = $(".login_auto label");
	var w = $(".login_warn");
	x.mouseover(function(){
		w.css("display","block");
	});
	x.mouseout(function(){
		w.css("display","none");
	});
});

//热门游戏
$(document).ready(function(e) {
    var tab = $(".home_hotgame li");
	tab.hover(function(){
		var index = $(this).index();
		$(".home_hotGame").eq(index).slideToggle(150);
	});
});