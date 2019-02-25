<?php

header("Content-Type:application/json;charset=utf-8");
if ($_SERVER["REQUEST_METHOD"]=="POST"){
    if(isset($_REQUEST["uname"])&&isset($_REQUEST["upwd"])){

    $uname=$_REQUEST["uname"];
    $upwd=$_REQUEST["upwd"];

    //1.准备链接数据库的配置信息

    $host="127.0.0.1";
    $name="root";
    $pwd="";
    $port="3306";
    $db="cs1804";

    //2.创建链接
    $conn=new mysqli($host,$name,$pwd,$db,$port);

    //3.设置链接字符集
    mysqli_query($conn,"SET NAMES UTF8");

    //4.准备sql语句
    $sql="  SELECT  `uname`,`upwd`  FROM userinfo WHERE uname='".$uname."' AND upwd='".$upwd."'";

    //5.执行sql语句
   $result= $conn->query($sql);
   //6.判断结果
    if ($result->num_rows>=1){
        print_r(json_encode(array("status"=>1,"msg"=>"登录成功")));
    }else{
        print_r(json_encode(array("status"=>0,"msg"=>"密码错误或账号不存在")));
    }
    //7.关闭链接
    $conn->close();


    }else{
        print_r(json_encode(array("status"=>-2,"msg"=>"数据不合法")));
    }


}else{
    print_r(json_encode(array("status"=>-1,"msg"=>"不支持get请求")));
}
