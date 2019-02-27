//cookie
$(function () {

    //置顶
        var $height=$(".nav_right>span").offset().top;
        $(window).scroll(function(){
            var $scrollHeight=$(this).scrollTop();
            if($scrollHeight>1){
                $(".nav_right>span").css("display","block")
            }else{
                $(".nav_right>span").css("display","none")
            }
        })
        //头部显示隐藏
        $(".nav_right>span").on("click",function(){
            $(window).scrollTop(0);
        })
        $(".header_right>ul>li").on("mouseenter",function(){
            $(this).find("ul").show();
        })
        $(".header_right>ul>li").on("mouseleave",function(){
            $(this).find("ul").hide();
        })
        //提cookie
    var addNum=0;

    var strLis=`  <li><a href="#"><span></span>会员中心</a></li>
                        <li><a href="#"><span></span>联系客服</a></li>
                        <li><a href="#"><span></span>个人资料</a></li>
                        <li><a href="#"><span></span>收货地址</a></li>
                        <li><a href="#"><span></span>站内消息</a></li>
                        <li><a href="#" class="outLogin"><span></span>退出登录</a></li>
                   `;
    //如果cookie username不为空
    if(!($.cookie("username")==""||$.cookie("username")==undefined)){
        if($.cookie("goodList")>0){
            addNum=$.cookie("goodList");
        }else{
            addNum=0;
        }
        $(".right>a").on("click",function(){
            location.href="shopCar.html"
        })
        $.cookie("goodList",addNum,{ expires: 7 })
        $(".header_right>ul>li:eq(5)>ul").html(strLis);
        $(".username").html($.cookie("username"));
        $(".main_top>p").html($.cookie("username"));

        //点击商品数量++
        $("#add").on("click", function () {
            addNum++;
            $.cookie("goodList",addNum,{ expires: 7 })
            $(".right>a>span").html(addNum);
            console.log(addNum);
            console.log($.cookie("goodList"));
        })

        $(".right>a>span").html(addNum);
    }else{
        $(".right>a").on("click",function(){
            alert(" 请先登录")
        })
        $(".username").html(" 登录▾");
        $("#add").on("click",function(){
            $.cookie("goodList",0)
        })
    }
    //点击退出清除信息
    $(".outLogin").on("click",function(){
        $.cookie("username","");
        $.cookie("goodList","");
        location.reload();
    })
})