//对象的创建调用关联函数
function person(name,age){
    this.name=name;
    this.age=age;
    this.changename=function(name){
        this.name=name;
    }
   this.changeage=changeage;//关联函数changeage  注意这里关联函数时不用加（） 外部通过对象调用时需要加（）
}
function changeage() {
    return 66;

var p = new person("shuaijian",666);
p.changename("shuaibijian");

document.write(p.name);//->shuaibijian
document.write(p.age);//->666
document.write(p.changeage());//->66

}