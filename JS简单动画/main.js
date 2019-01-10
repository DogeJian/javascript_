

var x = setInterval(move,10);//用定时器每10毫秒执行一次move函数
var pos = 10;//定义移动的盒子的初始位置为10px
function move() {
    if(pos>=350){
        clearInterval(x);//在边缘10px处停止运动
    }
    else{
        pos+= 1;
        document.getElementById("box2").style.left=pos+"px";
    }
}