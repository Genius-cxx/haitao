/**
 * Created by Lenovo on 2019/2/15.
 */
$(function() {


    //搜索框点击
    $(".middle p a").on("click", function () {
        $(".middle input").val($(this).html());
        return false;
    })


    //搜索置顶
    $(window).scroll(function () {
        var $scrollHeight = $(this).scrollTop();

        if ($scrollHeight > 150) {
            $(".header_search").css({
                "position": " fixed",
                "top": 0,
                "background": "#fff",
                "opacity": ".8",
                "z-index": 10
            }).on("mouseenter", function () {
                $(this).css("opacity", 1)
            })
            $(".nav").css({
                "marginTop": "98px"
            })
        } else {
            $(".header_search").css({
                "opacity": "1",
                "position": "static"
            })
            $(".nav").css({
                "marginTop": "0"
            })
        }

        $(".nav_right>span").on("click", function () {
            $(window).scrollTop(0);
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

        //滚动条

        var num1 = 1;
        setInterval(function () {
            num1++;
            $(".tt_content>p span").eq(num1).slideDown().siblings().hide();
            if (num1 >= 5) {
                num1 = 0;
            }
        }, 3000)






    })


    //轮播函数
    function autoPlay() {
        var num = 1;
        setInterval(function () {
            $(".main_content>ul>li").eq(num).addClass("currentLi").siblings("li").removeClass("currentLi");
            num++;
            if (num == 1) {
                $(".main").css({
                    "backgroundImage": "url(./img/lunbo01.jpg)",
                    "backgroundColor": "#ff215a"
                })
            }
            if (num == 2) {
                $(".main").css({

                    "backgroundImage": "url(./img/lunbo02.jpg)",
                    "backgroundColor": "#d02b3b"
                })
            }
            if (num == 3) {
                $(".main").css({

                    "backgroundImage": "url(./img/lunbo03.jpg)",
                    "backgroundColor": "#c21b2f"
                })
            }
            if (num == 4) {
                $(".main").css({

                    "backgroundImage": "url(./img/lunbo04.jpg)",
                    "backgroundColor": "#f0969f"
                })
            }
            if (num == 5) {
                $(".main").css({
                    "backgroundColor": "#E83D35",
                    "backgroundImage": "url(./img/lunbo05.jpg)"

                })
                num = 0;
            }

        }, 5000);
    }
    //轮播图

    autoPlay();

})

