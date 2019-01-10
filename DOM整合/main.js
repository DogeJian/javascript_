//通过 HTML DOM，可访问 JavaScript HTML 文档的所有元素。

/*
通过 id 找元素
document.getElementById(id)

//通过 class 找元素
document.getElementsByClassName(name)

//通过 tag 找元素
document.getElementsByTagName(name)

//DOM元素合集

element.childNodes 返回一个元素的子节点的数组。   -->注意这里。返回的是数组。调用记得用数组方法编写

element.firstChild 返回元素的第一个子节点。  -->非常注意！！！要获取第一个子节点。父节点和子节点间不能有换行！！！不然获取不到。血的教训呐

element.lastChild 返回元素的最后一个子节点。

element.hasChildNodes 如果元素有任何子节点，则返回 true，否则为 false 。  -->注意返回的是boolean类型

element.nextSibling 返回相同树级别的下一个节点。

element.previousSibling 返回在同一树级别的上一个节点。

element.parentNode 返回元素的父节点。

element.cloneNode() 克隆元素并返回结果节点。 -->如果需要克隆所有后代，请把 deep 参数[括号里]设置 true，否则设置为 false。

document.createElement(element) 创建一个新的元素节点。

document.createTextNode(text) 创建一个新的文本节点。

element.appendChild(newNode) 将一个新的子节点添加到元素作为最后一个子节点。

element.insertBefore(node1, node2) 在节点2之前插入node1作为子节点

element.removeChild(node) 要删除HTML元素，必须选择元素的父项并使用 removeChild(node) 移除元素

element.parentNode.removeChild(node) 实现相同结果的另一种方法是使用 parentNode 属性来获取要删除的元素的父项

element.replaceChild(newNode,oldNode) 替换HTML元素
*/



//element.childNodes   eg:
function childNodes_(){
    var x = document.getElementById("childNodes_");
    var y = x.childNodes;//此时y以数组方式返回了ID为shuaijian的div盒子的所有子节点
    for(var i=0;i<y.length;i++) y[i].innerHTML="666";
}

//element.firstChild && element.lastChild hasChildNodes eg:
function firstChild_(){
    var x = document.getElementById("firstChild_");
    var y = x.firstChild;
    y.innerHTML="123456789";//非常注意！！！要获取第一个子节点。父节点和子节点间不能有换行！！！不然获取不到。血的教训呐
    var z = x.lastChild;
    z.innerHTML="1234"
    alert(x.hasChildNodes()+"该元素有子节点");
}

//element.nextSibling  element.previousSibling  element.parentNode eg:
function nextSibling_() {
    var x = document.getElementById("nextSibling__");
    var z = document.getElementById("previousSibling_");
    var j = document.getElementById("parentNode_");
    var y = document.getElementById("li1");
    var i = document.getElementById("li2");
    x.innerHTML=y.nextSibling.innerHTML;
    z.innerHTML=i.previousSibling.innerHTML;
    j.innerHTML=i.parentNode.id;

}

//element.cloneNode() appendChild eg:
function cloneNode_() {
    var x = document.getElementById("ul_");
    var cln = x.cloneNode(true);//克隆ul_列表设置为true包括它的子节点也一并克隆
    document.getElementById("ul2").appendChild(cln);
}

//document.createElement(element) document.createTextNode(text) element.appendChild(newNode) eg:
function createElement_() {
    var x = document.createElement("p");
    var y = document.createTextNode("帅健新添文本呐");
    x.appendChild(y);
    document.getElementById("createElement_").appendChild(x);
}

//element.insertBefore(node1, node2)
function insertBefore_() {
    var x = document.createTextNode("这是新插入的子节点");
    document.getElementById("insertBefore_").insertBefore(x,p_);
}

//element.removeChild(node) element.parentNode.removeChild(node) element.replaceChild(newNode,oldNode) eg:
function removeChild_() {
    document.getElementById("removeChild_").removeChild(document.getElementById("p1"));//经过前面的练习。理清楚层次后就不用定义那么多变量了（除非有必要）。可以减少代码冗余量
    document.getElementById("p2").parentNode.removeChild(document.getElementById("p2"));//我觉得这种方法简单粗暴哈哈
    document.getElementById("removeChild_").replaceChild(document.createElement("p4").appendChild(document.createTextNode("替换好啦")),document.getElementById("p3"));//记住整体结构。额。这个其实还是定义变量好。这样写有点牵强了。。
}