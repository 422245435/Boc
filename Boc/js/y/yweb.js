/**
 * Created by yan yue on 2017/3/27.
 */
//load-more按钮功能实现
    function loading() {
//    显示其余的图片
        $(".hide").removeClass("hide");
        $(".load").addClass("hide");
    }
//    分类功能的实现实例
    $(".ynav li").click(function () {
    //    隐藏其他的分类产品
        $(".brand").css("display","none");
    });
//banner图片文字显示
    window.addEventListener("load",function () {
        console.log(111);
        var jump=document.querySelector("div.yup");
        var arr=jump.children;
        for (var i=0;i<arr.length;i++)
        {
            var  t=arr[i];
            console.log(t);
            t.style.opacity=1;
            t.style.transform="translate(0 ,-20px)"
        }
    });


