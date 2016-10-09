$(function(){
    var bool=false;
    $(".sort").on("tap",function(){
        bool=!bool;
        if(bool){
            $(".sort .drop").css("backgroundPosition","-164px -87px");
            //$("#sort_info").css("display","block");
            //$("#sort_info").css("zIndex","300");
            $("#sort_info").show();
            $(".overlay").show();
        }else{
            $(".overlay").hide();
            $("#sort_info").hide();
            //$("#sort_info").css("display","none");
            //$("#sort_info").css("zIndex","10");
            $(".sort .drop").css("backgroundPosition","");
        }
    });
})
