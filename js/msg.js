var index=0;
var mTop=24;
var ul=$("#message-up");
var ulWidth=ul.width();
var childs=$("#message-up").children();
var cloneChild=$("#message-up li").eq(0).clone();
ul.append(cloneChild);
childs=$("#message-up").children();

var timerId=setInterval(function(){
    index++;

    childs.eq(index).css({"opacity":"0"});

    ul.animate({
        "marginTop":(-index*mTop)+"px"
    },1000,function(){
        childs.eq(index).width("0");
        childs.eq(index).css({"opacity":"1"});
        childs.eq(index).animate({
            "width":ulWidth+"px"
        },800,function(){
            if(index>=childs.length-1){
                ul.css({
                    "marginTop":"0px"
                });
                index=0;
            }
        });

    });
},3000);
//如果用户轻触则停止定时器
//childs.bind("touchstart",function(e){
//    clearInterval(timerId);
//}).bind("touchend",function( e ){
//    var timerId=setInterval(function(){
//        index++;
//        ul.animate({
//            "marginTop":(-index*mTop)+"px"
//        },1500,function(){
//            if(index>=childs.length){
//                ul.css({
//                    "marginTop":"0px"
//                });
//                index=0;
//            }
//        });
//    },2000);
//});
