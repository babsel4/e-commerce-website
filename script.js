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

