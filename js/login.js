window.onload=function(){
    /**
     * Created by Lenovo on 2019/2/15.
     */
    if(!($.cookie("username")==""||$.cookie("username")==undefined)){
            alert("您已登录,如需更换账号，请先退出当前登录")
        location="zhuye.html";
    }
    function randomNumber(min,max){
        return min+Math.round(Math.random()*(max-min));
    }
    function randomCode(n){
        var str="";
        for(var i=0;i<n;i++){
            var num=Math.random();
            if(num>=0.5){
                str+=randomNumber(0,9);
            }else{
                str+=String.fromCharCode(randomNumber(65,90));
            }
        }
        return str;
    }
    var oYzm=document.querySelector(".yzm1")
    var oForm=document.forms[0];
    oForm.uyzm.onfocus=function(){
        oYzm.innerHTML=randomCode(5);
    }

}
$(function(){
    $(".header_right>ul>li").on("mouseenter",function(){
        $(this).find("ul").show();
    })
    $(".header_right>ul>li").on("mouseleave",function(){
        $(this).find("ul").hide();
    })

    $.validator.addMethod("checkedYzm",function (val,input,param) {
        var reg= $(".yzm1").html()==$(".yzm input[name=uyzm]").val();
        return reg;
    },"验证码/密码错误");
    $("form").validate({
        rules: {
            uname: "required",
            upwd: "required",
            uyzm:{
                required:true,
                checkedYzm:true
            }
        },
        messages: {
            uname: {
                required: "用户名必填"
            },
            upwd: {
                required: "密码不能为空"
            },
            uyzm:{
                required:"验证码不能为空"

            }
        },
        submitHandler: function () {

            $.post("./../server/login.php", $("form").serialize(), function (res) {
                alert(res.msg);
                if (res.status==1){
                    var  userName = $("input[name=uname]").val();
                    $.cookie("username",userName,{ expires: 7 });
                    location="zhuye.html";
                }
            }, "json")
            return false;
        }
    })
    $(document).keyup(function(event){
        if(event.keyCode ==13){
            $("#login").trigger("click");
        }
    });


})
