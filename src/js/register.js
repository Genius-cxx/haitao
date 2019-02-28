/**
 * Created by Lenovo on 2019/2/15.
 */

$(function(){


    //自己定义规则

    //val 对应输入的值
    //input 文本框
    $.validator.addMethod("checkedName",function (val,input,param) {
        var reg=/^[a-z]+\w+$/i;
        return reg.test(val);
    },"用户名不合法");
    $.validator.addMethod("checkedEmail",function (val,input,param) {
        var reg=/^\w+@\w+\.\w+$/;
        return reg.test(val);
    },"邮箱格式不合法");
    $.validator.addMethod("checkedYzm",function (val,input,param) {
        var reg= $(".yzm1").html()==$(".yzm input[name=uyzm]").val();
        return reg;
    },"验证码错误");
    $.validator.addMethod("checkedTM",function (val,input,param) {
        var reg= $("input[name=upwd]").val()==$("input[name=upwdTwice]").val();
        return reg;
    },"两次密码不一致");
    $("form").validate({
        //rules 校验的规则
        rules:{
            uname:{
                required:true,
                rangelength:[6,16],
                checkedName:true,
                remote:{
                    url:"http://127.0.0.1:8080/zouxiunet/server/checkeUser.php",
                    type:"get",
                    data:{
                        "username":function () {
                            return $("input[name=uname]").val();
                        }
                    }
                }
            },
            upwd:{
                required:true,
                rangelength:[6,20]
            },
            upwdTwice:{
                checkedTM:true
            },
            uemail:{
                checkedEmail:true
            },
            uyzm:{
                required:true,
                checkedYzm:true
            }
        },
        messages:{
            uname:{
                required:"用户名不能为空",
                rangelength:"用户名长度必须是{0}-{1}",
                remote:"该用户名已存在"
            },
            upwd:{
                required:"密码不能为空",
                rangelength:"密码长度必须是{0}-{1}",
            },
            uyzm:{
                required:"验证码必填"

            }
        },
        submitHandler:function () {
            $.ajax({
                url:"./../server/register.php",
                type:"post",
                dataType:"json",
                data:$("form").serialize()
            }).then(function(result){
                if (result.status==1){
                    alert(result.msg);
                    location="login.html"

                }else{
                    alert(result.msg);

                }
            })
            return false;
        }


    })
    $(document).keyup(function(event){
        if(event.keyCode ==13){
            $("#login").trigger("click");
        }
    });
})

