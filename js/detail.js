/**
 * Created by Lenovo on 2019/2/18.
 */
$(function(){
    //�����ӹ��ﳵ ���ش����cookie
    $("body").on("click","#add",function () {
        if(!($.cookie("username")==""||$.cookie("username")==undefined)){
            goodList=$.cookie("username");
            $(".addCar").html("已加入购物车")
            $(".addCar").stop().fadeIn(500).fadeOut(500)
        }else{
            $(".addCar").html("请先登录")
            $(".addCar").stop().fadeIn(500).fadeOut(1000)
        }


    })




})