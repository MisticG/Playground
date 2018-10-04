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

function entirelyRandom() {
    var red = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    var blue = Math.round(Math.random() * 255);

    var rgbValue = "rgb(" + red + "," + green + "," + blue +")";
    document.body.style.backgroundColor = rgbValue;

    console.log(red, green, blue);
}

setInterval(entirelyRandom, 1000);

