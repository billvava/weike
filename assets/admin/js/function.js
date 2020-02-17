/***********   元素到达顶部时固定   ***************/
/*
v = 对象
t = 元素固定时距离顶部的距离
*/
function objectTop(v,t) {
    var elm = $(v);
    var startPos = $(elm).offset().top - t;
    $.event.add(window, "scroll", function() {
        var p = $(window).scrollTop();
        $(elm).css('position',((p) > startPos) ? 'fixed' : 'static');
        $(elm).css('top',((p) > startPos) ? t+'px' : '');
		//if((p) > startPos){$(elm).html((p));}else{$(elm).html((p));}
    });
}
/**********  元素到达顶部时固定END  **************/

/*************   点空白处执行函数   ****************/
/*
v: 对象 （点击除此对象外的其它地方将执行回调）
c: 回调函数
*/
function BlankOFF(v,c){
	$(document).bind("click",function(e){			
		var target  = $(e.target);
		if(target.closest(v).length == 0){
			eval(c);
		}
	});
}
/***********   点空白处执行函数END  ***************/