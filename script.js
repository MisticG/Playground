function changeColor() {

    var style = document.body.style;

if (style.backgroundColor == "white") {
    style.backgroundColor = "yellow";
} else { 
    style.backgroundColor = "white";
}

}

function randomColor() {
    var randomValue = Math.random();

    var style = document.body.style;
    
if (randomValue = Math.random() < 0.1) {
    style.backgroundColor = "yellow";
} else if (randomValue = Math.random() < 0.2) {
    style.backgroundColor = "purple";
} else if (randomValue = Math.random() < 0.3) {
    style.backgroundColor = "blue";
} else {
    style.backgroundColor = "gray";
}
}


