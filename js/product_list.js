define(function (require, exports, module) {


    /*加载IScroll模块*/
    var IScroll = require("./iscroll.js");

    var myScroll1 = new IScroll('#pro_wrapper', {
        eventPassthrough: true,
        scrollX: true,
        scrollY: false,
        preventDefault: false
    });

    var listDevice = $(".list_device");

    listDevice.css("height", $("html").height() - $("header").height() - $("footer").height() + "px");

    var mySwiper = new Swiper('#hot', {

        scrollContainer: true,

        mousewheelControl: true,

        mode: 'vertical',

        //Enable Scrollbar

        scrollbar: {

            container: '.swiper-scrollbar',

            hide: true,

            draggable: false
        }
    });

    //排序列表


    //
    var mySwiper2 = new Swiper('#list', {

        scrollContainer: true,

        mousewheelControl: true,

        mode: 'vertical',

        resistance : '100%',

        //Enable Scrollbar

        scrollbar: {

            container: '.swiper-scrollbar2',

            hide: true,

            draggable: false
        },
        onFirstInit:function(swiper){
            document.getElementById("sort_info").style.display="none";
        }
    });

})