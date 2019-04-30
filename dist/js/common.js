// minimize and maximize menus
var buttonMinimize = document.getElementById('btn-minimize');
var buttonMaximize = document.getElementById('btn-maximize');
var siteMenu = document.getElementById('nav-menu');
var textSlow = document.getElementsByClassName('slow');

buttonMinimize.onclick = function() {
    siteMenu.classList.add('navigation_minimize');
    for(var i = 0, il =  textSlow.length; i < il; i++) {
        textSlow[i].style.opacity = "0";
    }
};
buttonMaximize.onclick = function(){
    siteMenu.classList.remove('navigation_minimize');
    setTimeout(function(){
        for(var i = 0, il =  textSlow.length; i < il; i++) {
            textSlow[i].style.opacity = "1";
        }
    },300);
};