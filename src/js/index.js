$(function () {

    //搜索框点击
    $(".middle p a").on("click", function () {
        $(".middle input").val($(this).html());
        return false;
    })


    //搜索置顶
    $(window).scroll(function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop>15){
            $(".nav_right>span").css("display","block")
        }else{
            $(".nav_right>span").css("display","none")
        }
        if (scrollTop > 135) {
            $(".header_search").css({
                "position": " fixed",
                "top": 0,
                "background": "#fff",
                "opacity": ".8",
                "z-index": 10,
                "margin":0,
                "padding-top":"10px",
                "height":"80px"
            }).on("mouseenter", function () {
                $(this).css("opacity", 1)
            })
            $(".nav").css({
                "marginTop": "98px"
            })
        } else {
            $(".header_search").css({
                "opacity": "1",
                "position": "static",
                "padding":"20px 0",
                "height": "98px"
            })
            $(".nav").css({
                "marginTop": "0"
            })
        }

        $(".nav_right>span").on("click", function () {
            $(window).scrollTop(0);
        })


    })

    //tab栏
    $(".pro_nav ul>li").on("click", function () {
        $(this).children("a").addClass("CC").parent().siblings().children("a").removeClass("CC");
        $(".goods>ul").eq($(this).index()).show().siblings().hide();
        return false;
    })


    //头移入显示
    $(".header_right>ul>li").on("mouseenter", function () {
        $(this).find("ul").stop().fadeIn(300);
    })
    $(".header_right>ul>li").on("mouseleave", function () {
        $(this).find("ul").stop().fadeOut(300);
    })

    // 头条广告滚动条
     var $number = 0;
    function tt() {
        $number++;
        $(".tt_content>div p").eq($number).slideDown(500).siblings().hide()
        if ($number >= 5) {
            $number = -1;
        }
    }
    //启动滚动条
    var b = setInterval(tt, 2000)

    //移入滚动停止 移除继续
    $(".tt_content>div p").on("mouseenter", function () {
        clearInterval(b);
    }).on("mouseleave", function () {
        b = setInterval(tt, 4000)
    })



    //轮播图
    var num = 1;
    function lbplay() {
        $(".main_content>ul>li").eq(num).addClass("currentLi").siblings("li").removeClass("currentLi");
        num++;
        if (num == 1) {
            $(".main").css({
                "backgroundImage": "url(./img/lunbo01.jpg)",
                "backgroundColor": "#ff215a",
                "transition":"1s"
            })
        }
        if (num == 2) {
            $(".main").css({
                "backgroundImage": "url(./img/lunbo02.jpg)",
                "backgroundColor": "#d02b3b",
                "transition":"1s"
            })
        }
        if (num == 3) {
            $(".main").css({
                "backgroundImage": "url(./img/lunbo03.jpg)",
                "backgroundColor": "#c21b2f",
                "transition":"1s"
            })
        }
        if (num == 4) {
            $(".main").css({
                "backgroundImage": "url(./img/lunbo04.jpg)",
                "backgroundColor": "#f0969f",
                "transition":"1s"
            })
        }
        if (num == 5) {
            $(".main").css({
                "backgroundColor": "#E83D35",
                "backgroundImage": "url(./img/lunbo05.jpg)",
                "transition":"1s"
            })
            num = 0;
        }

    }


        var aa = setInterval(lbplay,3000);



    $(".main_content").on("mouseenter",function(){
        clearInterval(aa);
    }).on("mouseleave",function(){
        aa=setInterval(lbplay,3000);
    })
    $(".main_content>ul>li").on("click", function () {
        num=$(this).index();
        lbplay();
    })

})

