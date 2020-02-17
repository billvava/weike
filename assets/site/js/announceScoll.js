var scrollDelay=10;//数字越大速度越慢 
    var Scroll=document.getElementById("scroll"); 
    var Scroll2=document.getElementById("scroll2"); 
    var currentTop=0,preTop=0,stoptime=0,stopscroll=false; 
    var ScrollChild=Scroll.getElementsByTagName("li"); 
    var ScrollHeight=Scroll.offsetHeight; 
    function ScrollInfo(){ 
        if(stopscroll==true) return; 
        currentTop++; 
        if(currentTop+1>=ScrollHeight){ 
            currentTop--; 
            stoptime++; 
            if(stoptime==parseInt(ScrollHeight)*scrollDelay) { 
currentTop=0; 
stoptime=0; 
    } 
        }else{ 
            preTop=Scroll.scrollTop; 
            Scroll.scrollTop++; 
            if(preTop==Scroll.scrollTop){ 
     Scroll.scrollTop=Scroll2.offsetHeight-ScrollHeight; 
     Scroll.scrollTop+=1; 
     } 
        } 
    } 
    function Int_Scroll(){ 
        Scroll2.innerHTML=""; 
        Scroll2.innerHTML=Scroll.innerHTML; 
        Scroll.innerHTML=Scroll2.innerHTML+Scroll2.innerHTML; 
        Scroll.onmouseover=function(){ 
            stopscroll=true; 
        } 
        Scroll.onmouseout=function(){ 
            stopscroll=false; 
        } 
        setInterval("ScrollInfo()",scrollDelay); 
    } 
    window.setTimeout("Int_Scroll()",1000); 