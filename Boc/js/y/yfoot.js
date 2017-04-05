/**
 * Created by yan yue on 2017/3/25.
 */
function  changeAddr(num) {
    //给之前的li移除active类
    document.getElementsByClassName('active')[0].className="";
    //给当前的点击的li添加active类
    document.getElementById("li"+num).className="active";
    for(var i=0;i<6;i++)
    {
    //    隐藏所有的
        document.getElementById("box"+i).style.display="none";
    }
    //    显示当前的
    document.getElementById("box"+num).style.display="block";
}