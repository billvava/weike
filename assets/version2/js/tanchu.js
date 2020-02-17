$(document).ready(function img(){
		/*×¢²á¿òµ¯³ö²ã*/
        function popupDiv(div_id) {
            var div_obj = $("." + div_id);
            var posLeft = ($(window).width() - div_obj.width()) / 2;
            var posTop = ($(window).height() - div_obj.height()) / 2;

            //Ìí¼Ó²¢ÏÔÊ¾ÕÚÕÖ²ã
            $("<div id='mask'></div>").addClass("mask")
                                      .appendTo("body")
                                      .fadeIn("fast");
            div_obj.css({"top": posTop , "left": posLeft}).fadeIn();
        }

        function hideDiv(div_id) {
            $("#mask").remove();
            $("." + div_id).fadeOut();
        }
		
        /*×¢²á¿òµ¯³ö²ã end*/
		$(".d_tan").click(function(){
			popupDiv("d_qie4");
		});
		$(".d_qie4a").click(function(){
			hideDiv("d_qie4");
		});
									
})

$(document).ready(function img(){
		/*×¢²á¿òµ¯³ö²ã*/
        function popupDiv(div_id) {
            var div_obj = $("." + div_id);
            var posLeft = ($(window).width() - div_obj.width()) / 2;
            var posTop = ($(window).height() - div_obj.height()) / 2;

            //Ìí¼Ó²¢ÏÔÊ¾ÕÚÕÖ²ã
            $("<div id='mask'></div>").addClass("mask")
                                      .appendTo("body")
                                      .fadeIn("fast");
            div_obj.css({"top": posTop , "left": posLeft}).fadeIn();
        }

        function hideDiv(div_id) {
            $("#mask").remove();
            $("." + div_id).fadeOut();
        }
		
        /*×¢²á¿òµ¯³ö²ã end*/
		$(".d_xieyi").click(function(){
			popupDiv("d_fuwuxieyi");
		});
		$(".f_right").click(function(){
			hideDiv("d_fuwuxieyi");
		});
									
})

