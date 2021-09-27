var circle = document.getElementsByClassName('circle')

function off(){
    for (let index = 0; index < circle.length; index++) {
        circle[index].style.animation = "none"
        circle[index].style.backgroundColor = "#342140"
    }
}

function on(){
    for (var i = 0; i < circle.length; i++) {
        circle[i].removeAttribute("style");
    }
}
