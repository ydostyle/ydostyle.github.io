define(function(require,exports,module){
    //��ҳͷ���ֲ�ͼ
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
    //��Ʒ�б��ֲ�ͼ
    var Swiper2 = new Swiper('#swiper-container2',{
        pagination : '#pagination2'
    });
    //��Ǯ����ʱ������Ϣ����
    var msg=require("./msg.js");
})