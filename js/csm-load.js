/**
 * Created by ming on 2016/7/19.
 */
$(function() {

    $("#csm-submit").children("input").on("click",function() {
        //alert($("#user")[0].value)
        var username=$("#user")[0].value;
        $.ajax("load.php",{


            data:$("#csm-form").serialize(),
            success:function(data) {
                if(data) {
                    localStorage.setItem("thisuser",username);
                    location.href = "index.html";
                }else{
                    $("#csm-submit").children(".csm-error").addClass("csm-dis").removeClass("csm-nodis");
                    return;
                }
            }
        })
    })
})