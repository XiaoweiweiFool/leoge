/**
 * Created by ming on 2016/7/18.
 */
$(function(){
    var flag = false;
    $("#csm-user").on("blur",function() {
        if(testUser()){
            userRepeat();

        };

    })
    $("#csm-password").on("blur",function() {
        testPassword();
    })
    $("#csm-password-two").on("blur",function() {
        passwordIsSame();
    })
    $("#csm-user,#csm-password,#csm-password-two").on("focus",function() {
        $(this).siblings().addClass("csm-nodis").removeClass("csm-dis");
    })
    $("#csm-submit").on("click",function() {

        //console.log(testUser());
        var a = testUser();
        var c= testPassword();
        var b= passwordIsSame();
        var d = isCheckbox();
        if(a&&b&&c&&d){
            $.ajax("users.php",{
                //url:"../test.php",
                data:$("#csm-form").serialize(),
                success:function(data){
                    location.href="load.html";
                }

            })
        }

        return false;
    })



    //检查用户名是否正确
    function testUser(){
        var reg = /^[a-zA-Z\u4e00-\u9fa5][a-zA-Z0-9\u4e00-\u9fa5]{3,11}$/;

        if(reg.test($("#csm-user").val())){
            $("#csm-user").siblings(".csm-pass,.csm-error,.csm-has").addClass("csm-nodis").removeClass("csm-dis");
            $("#csm-user").siblings(".csm-pass").addClass("csm-dis").removeClass("csm-nodis");
            return true;
        }else{
            $("#csm-user").siblings(".csm-pass,.csm-error,.csm-has").addClass("csm-nodis").removeClass("csm-dis");
            $("#csm-user").siblings(".csm-error").addClass("csm-dis").removeClass("csm-nodis");

            return false;
        }
    }

    //检查用户名是否重复
    function userRepeat(){
        $.ajax("testUser.php",{

            data:"user="+$("#csm-user").val(),
            success:function(data){
                if(data){
                    flag = false;
                    $("#csm-user").siblings(".csm-pass,.csm-error,.csm-has").removeClass("csm-dis").addClass("csm-nodis");
                    $("#csm-user").siblings(".csm-has").addClass("csm-dis").removeClass("csm-nodis");
                }else{
                    flag = true;
                    $("#csm-user").siblings(".csm-pass,.csm-error,.csm-has").removeClass("csm-dis").addClass("csm-nodis");
                    $("#csm-user").siblings(".csm-pass").removeClass("csm-nodis").addClass("csm-dis");
                }

            }
        })
    }

    //检查密码是否正确
    function testPassword(){
        var reg = /^[a-zA-Z0-9]{6,20}$/;

        if(reg.test($("#csm-password").val())){
            $("#csm-password").siblings(".csm-pass,.csm-error").addClass("csm-nodis").removeClass("csm-dis");
            $("#csm-password").siblings(".csm-pass").addClass("csm-dis").removeClass("csm-nodis");
            return true;
        }else{
            $("#csm-password").siblings(".csm-pass,.csm-error").addClass("csm-nodis").removeClass("csm-dis");
            $("#csm-password").siblings(".csm-error").addClass("csm-dis").removeClass("csm-nodis");
            return false;
        }
    }
    //检查密码是否相同
    function passwordIsSame(){
        if($("#csm-password").val()==$("#csm-password-two").val()){
            $("#csm-password-two").siblings(".csm-pass,.csm-error").addClass("csm-nodis").removeClass("csm-dis");
            $("#csm-password-two").siblings(".csm-pass").addClass("csm-dis").removeClass("csm-nodis");
            return true;
        }else{
            $("#csm-password-two").siblings(".csm-pass,.csm-error").addClass("csm-nodis").removeClass("csm-dis");
            $("#csm-password-two").siblings(".csm-error").addClass("csm-dis").removeClass("csm-nodis");
            return false;
        }
    }
    //检查验证码
    function testTest(){

    }
    //检查是否同意协议
    function isCheckbox(){
        if($("#csm-checkbox")[0].checked){
            $("#csm-checkbox").parent().siblings(".csm-error").removeClass("csm-dis").addClass("csm-nodis")

            return true;
        }else{
            $("#csm-checkbox").parent().siblings(".csm-error").removeClass("csm-nodis").addClass("csm-dis")
            return false;
        }
    }
})