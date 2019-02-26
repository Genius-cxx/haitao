/**
 * Created by Lenovo on 2019/2/18.
 */
$(function(){
    //�����ӹ��ﳵ ���ش����cookie
    $("#add").on("click",function () {
        $(".addCar").stop().fadeIn(500).fadeOut(500)
        var obj={
            "shopname":$(".main_right h2").html()+$(".main_right h3").html(),
            "tuangoujia":$(".tgj").html(),
            "darenjia":$(".drj").html(),
            "imgSrc":$(".main_left>a>img").attr("src"),
            "moreMoney":$(".smore").html()

        };
        //������Ʒ��Ŀ����cookie
        var arr=[];
        for(var i=0;i<(parseInt($.cookie("goodList"))+1);i++){
            arr.push(obj);
        }
        $.cookie("goods",JSON.stringify(arr),{expires: 7});
        var $goodsObj= JSON.parse($.cookie("goods"));

    })




})