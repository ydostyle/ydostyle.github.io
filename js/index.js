define(function(require,exports,module){
    //首页头部轮播图
    var Swiper1 = new Swiper('#swiper-container1',{
        tdFlow: {
            rotate : 80,
            stretch :0,
            depth: 100,
            modifier : 1,
            shadows : true
        },
        loop : true,
        autoplay : 3000,
        pagination : '#pagination1'
    });
    //产品列表轮播图
    var Swiper2 = new Swiper('#swiper-container2',{
        pagination : '#pagination2'
    });
    //来钱儿定时播放消息功能
    var msg=require("./msg.js");
})