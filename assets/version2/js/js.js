function PopSheet()
{
    this.creatPupHtml();
    //对象
    this.oPopB     = $('#popB');
    this.oPopC     = $('#popC');
    this.oPopContain  = $('#popContain');
    this.oPopClose = $('#popClose');
     
    //oPopC属性
    this.oPopC_left   = 0;
    this.oPopC_top    = 0;
    this.oPopC_width  = 0;
    this.oPopC_height = 0;
    //owindow / oPage属性
    this.oWindow_width  = 0;
    this.oWindow_height = 0;
    this.oPage_height   = 0;
 
    //控制属性
    this.allowScroll = true;
     
    var _this = this;
}
     
//创建pupHTML
PopSheet.prototype.creatPupHtml = function()
{
    if($('#pupB').length==0)
    {
        $('<div id="popB" style="display:none;background:#000;position:absolute;z-index:999997"></div><div id="popC" style="display:none;position:absolute;z-index:999998"><div id="popContain"></div><div id="popClose" style="position:absolute"></div></div>').prependTo($('body'));
    }
}
     
//计算尺寸
PopSheet.prototype.calculateSize = function(nWidth,nHeight)
{
     
    this.oWindow_width  = $(window).width();
    this.oWindow_height = $(window).height()
    this.oPage_height   = $(document).height();
    this.oPopC_width    = nWidth || this.oPopC.width();
    this.oPopC_height   = nHeight || this.oPopC.height();
    this.oPopC_left     = Math.floor((this.oWindow_width-this.oPopC_width)/2);
    this.oPopC_top      = Math.floor((this.oWindow_height-this.oPopC_height)/2*0.6+$(window).scrollTop());
    this.oPopC_top = this.oPopC_top<0?0:this.oPopC_top;
     
    this.oPopC.css({'left':+this.oPopC_left+'px','width':+this.oPopC_width+'px','height':+this.oPopC_height+'px'}).stop().animate({'top':+this.oPopC_top+'px'}, 200);
    this.oPopB.css({'width':+this.oWindow_width+'px','height':+this.oPage_height+'px'});
}
     
//基础控制器
PopSheet.prototype.openPopSheet = function(nWidth,nHeight)
{
    var _this = this;
    var time = null;
     
    var fWindowScroll = function()
    {
        clearTimeout(time);
        time = setTimeout(function(){_this.calculateSize(nWidth,nHeight)},20);
    }
        
    
    this.calculateSize(nWidth,nHeight);
    this.oPopC.show();
    
    this.oPopB.fadeTo(0,0.5);
     
    $(window).resize(function(event) 
    {
        _this.calculateSize();
    });
 
    //当属性里的allowScroll == true的时候，开启滚动效果
    if(this.allowScroll==true)
    {
        $(window).bind('scroll',fWindowScroll);
    }
 
    this.oPopClose.click(function(event) 
    {
        _this.oPopC.hide();
        _this.oPopB.hide();
        _this.oPopContain.html('');
        $(window).unbind('scroll',fWindowScroll);
    });
     
     
}
     
/**
 * [packageHtml 显示load进来的地址]
 * @param  {string} sUrl    [load地址的内容到窗口的]
 * @param  {number} nWidth  [可省略，用户自定义层的windth || 自动获取css的windth]
 * @param  {[type]} nHeight [可省略,用户自定义层的height || 自动获取css的height]
 */
PopSheet.prototype.packageHtml = function(sUrl,nWidth,nHeight)
{
    this.openPopSheet(nWidth,nHeight);
    this.oPopContain.load(sUrl);
}
/**
 * [packageMessage 显示自定义文本]
 * @param  {string} sMessage  [自定义内容]
 * @param  {number} nWidth    [可省略，用户自定义层的windth || 自动获取css的windth]
 * @param  {[type]} nHeight   [可省略,用户自定义层的height || 自动获取css的height]
 */
PopSheet.prototype.packageMessage = function(sMessage,nWidth,nHeight)
{
    this.openPopSheet(nWidth,nHeight);
    this.oPopContain.html(sMessage);
}
   
/**
 * ---------------------------------
 * [PopSheetVideo 子类，弹视频专用]
 * 继承自PopSheet
 * ---------------------------------
 */
function PopSheetVideo()
{
    PopSheet.call(this);
}
for(var i in PopSheet.prototype)
{
    PopSheetVideo.prototype[i]=PopSheet.prototype[i];
}
     
//视频弹窗
PopSheetVideo.prototype.packageVideo = function(obj,nWidth,nHeight)
{
    this.openPopSheet(nWidth,nHeight);
     
    var sVideoUrl = obj.attr('data-url');
     
    var loadHtml = '<object width="100%" height="100%" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" name="mainvideo" id="mainvideo"><param name="movie" value="http://cdn1.zygames.com/qqsm/video/video_img_b.swf?myMovieB='+sVideoUrl+'&amp;myMovieTitle=#&amp;myMoviePic=#&amp;myMovieURL=#"><param name="quality" value="high"><param value="transparent" name="wmode"><embed width="100%" height="100%" src="http://cdn1.zygames.com/qqsm/video/video_img_b.swf?myMovieB='+sVideoUrl+'&myMovieTitle=#&myMoviePic=#&myMovieURL=#" quality="high" wmode="transparent" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" value="transparent" name="mainvideo"><param name="swfversion" valzue="6.0.65.0"></object>';
     
    this.oPopContain.html(loadHtml);
}
 
//------
$(document).ready(function() {
 
    var pop = new PopSheetVideo();
    pop.allowScroll = true;
	
    $("#step1").click(function(event) {
        pop.packageVideo($(this),'850','478');
    });
});