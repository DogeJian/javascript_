var num=0;
var images=["1.png","2.png","3.png"];
function prev() {
    var pictures=document.getElementById("pictures");
    num++;
    if(num>=images.length){
        num=0;
    }
    pictures.src=images[num];

}
function next() {
    var pictures=document.getElementById("pictures");
    num--;
    if(num<0){
        num=images.length-1;
    }
    pictures.src=images[num];

}

