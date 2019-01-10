/*
  我一直对表单中的name属性和id属性的区别有所疑惑。看了底下链接的帖子有所理解：

  1.JS中取值id优先级高于name；
  2.name名字不能与onclick所链接的函数名字相同，不然会报错；
  3.id是唯一的，name不是；
  4.在asp.net中request.form时用的是name属性；

  https://bbs.csdn.net/wap/topics/90218635
 */
function form_() {
    var f1 = document.getElementById("input1");
    var f2 = document.getElementById("input2");
    if(f1.value!=""&&f2.value!="") {
        if (f1.value == f2.value){
            alert("表单提交成功");
            return true;
        }
        else{
            alert("两次输入内容不同");
            return false;
        }

    }
    else{
        alert("内容不能为空");
    }
}