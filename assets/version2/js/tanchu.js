$(document).ready(function img(){
		/*ע��򵯳���*/
        function popupDiv(div_id) {
            var div_obj = $("." + div_id);
            var posLeft = ($(window).width() - div_obj.width()) / 2;
            var posTop = ($(window).height() - div_obj.height()) / 2;

            //��Ӳ���ʾ���ֲ�
            $("<div id='mask'></div>").addClass("mask")
                                      .appendTo("body")
                                      .fadeIn("fast");
            div_obj.css({"top": posTop , "left": posLeft}).fadeIn();
        }

        function hideDiv(div_id) {
            $("#mask").remove();
            $("." + div_id).fadeOut();
        }
		
        /*ע��򵯳��� end*/
		$(".d_tan").click(function(){
			popupDiv("d_qie4");
		});
		$(".d_qie4a").click(function(){
			hideDiv("d_qie4");
		});
									
})

$(document).ready(function img(){
		/*ע��򵯳���*/
        function popupDiv(div_id) {
            var div_obj = $("." + div_id);
            var posLeft = ($(window).width() - div_obj.width()) / 2;
            var posTop = ($(window).height() - div_obj.height()) / 2;

            //��Ӳ���ʾ���ֲ�
            $("<div id='mask'></div>").addClass("mask")
                                      .appendTo("body")
                                      .fadeIn("fast");
            div_obj.css({"top": posTop , "left": posLeft}).fadeIn();
        }

        function hideDiv(div_id) {
            $("#mask").remove();
            $("." + div_id).fadeOut();
        }
		
        /*ע��򵯳��� end*/
		$(".d_xieyi").click(function(){
			popupDiv("d_fuwuxieyi");
		});
		$(".f_right").click(function(){
			hideDiv("d_fuwuxieyi");
		});
									
})

