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

//setInterval(entirelyRandom, 1000); //

function hexaRandom() {
    var red = convertToHex(Math.round(Math.random() * 15));
    var red2 = convertToHex(Math.round(Math.random() * 15));
    var green = convertToHex(Math.round(Math.random() * 15));
    var green2 = convertToHex(Math.round(Math.random() * 15));
    var blue = convertToHex(Math.round(Math.random() * 15));
    var blue2 = convertToHex(Math.round(Math.random() * 15));

    var hexValue = "#"+red+red2+green+green2+blue+blue2;
    document.body.style.backgroundColor = hexValue;
    console.log(hexValue);

} 

function convertToHex(value) {
    if (value == 10) {
        return "A";
    } else if (value == 11) {
        return "B";
    } else if (value == 12) {
        return "C";
    } else if (value == 13) {
        return "D";
    } else if (value == 14) {
        return "E";
    } else if (value == 15) {
        return "F";
    }
    return value;
}

myLibrary()

