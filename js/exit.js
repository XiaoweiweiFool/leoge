/**
 * Created by ming on 2016/7/21.
 */
$(function() {
    var thisuser = localStorage.getItem("thisuser");
    if(typeof thisuser =="string") {
        console.log("nnnnnn")
        $("#csm-header .thisuser").addClass("csm-dis").removeClass("csm-nodis");
        $("#csm-exit").addClass("csm-dis").removeClass("csm-nodis")
        $("#csm-header .csm-load-link").addClass("csm-nodis").removeClass("csm-dis");
        $("#csm-header .csm-resize-link").addClass("csm-nodis").removeClass("csm-dis")
        $("#csm-header .thisuser a")[0].innerHTML = thisuser;
        $(".page1_box a").css("display", "none");
    }else{
        $("#csm-header .csm-load-link").addClass("csm-dis").removeClass("csm-nodis");
        $("#csm-header .csm-resize-link").addClass("csm-dis").removeClass("csm-nodis")
        $("#csm-header .thisuser").addClass("csm-nodis").removeClass("csm-dis");
        $("#csm-exit").addClass("csm-nodis").removeClass("csm-dis")
    }
    $("#csm-exit").on("click",function() {
        localStorage.removeItem("thisuser");
        location.href = "load.html";
    })
})