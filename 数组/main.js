

var shuaijian = new Array();//声明数组不加成员
shuaijian[0] = "HTML";//动态添加元素
shuaijian[1] = "CSS";
shuaijian[2] = "JS";
shuaijian[3] = "C++";

var shuaibijian = ["JQ","Vue","Bootstrap"]//直接声明

var Dogejian = shuaijian.concat(shuaibijian);//新数组Dogejian为shuaijian与shuaibijian数组使用concat方法合并的新数组

function text() {
    for(var i=0;i<Dogejian.length;i++) alert(Dogejian[i]);
}
setInterval(alert(text()),6000);//setInterval方法：每6S执行一次（注意第一个value位函数单独写时候不带括号如：setInterval(text,6000);）
