var toggler=document.getElementById("togg");
var toggled=document.getElementById("collapse");
var handler=document.getElementById("toggleHandler");
var computedStyle=window.getComputedStyle(toggled);
var disp=computedStyle.display;
toggler.addEventListener("click", function(){
    toggled.classList.toggle("toggling")
    if (computedStyle.display =="block"){
        handler.classList.remove("navbar-toggler-icon")
        handler.classList.add("fa");
        handler.classList.add("fa-times")
    }
    if (computedStyle.display =="none"){
        handler.classList.add("navbar-toggler-icon")
        handler.classList.remove("fa");
        handler.classList.remove("fa-times")
    }
})
$('.carousel').carousel({
    interval:3000
})
function rightScrolBtn(btn){
    btn.parentNode.scrollLeft +=150;

}
function leftScrolBtn(btn){
    btn.parentNode.scrollLeft -=150;
}
/*var leftBtn=document.getElementsByClassName("left")
for (let i = 0; i < leftBtn.length; i++) {
    let left=leftBtn[i];
    let leftParent=leftBtn[i].parentNode;
    if (leftParent.scrollLeft==0) {
        left.style.display="none"
    }else{
        left.style.display="block"
    }
    
}
*/