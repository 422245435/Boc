/**
 * Created by hp on 2017/3/27.
 */
//¼àÌıÊÂ¼ş
window.addEventListener("load",function(){
    var jump=document.querySelector("div.d-s-p");
    var jump_arr=jump.children;
    for(var i=0;i<jump_arr.length;i++){
        var t=jump_arr[i];
        //console.log(t);
        t.style.opacity=1;
        t.style.transform="translate(0,-20px)"
    }
})
$(function() {

    $("div.d-ab-nav .fl a").click(function () {
        console.log(1);
        $("div.d-ab-nav .fl a").removeClass("d-hover");
        $(this).addClass("d-hover");
    });
})