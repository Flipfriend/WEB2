
var imagesArray = ["images/kitten0.jpg","images/kitten1.jpg","images/kitten2.jpg","images/kitten3.jpg","images/kitten4.jpg"]

function displayImage(){
    var num = Math.floor(Math.random()*5);
    document.images.src = imagesArray[num];
}

var myButton = document.getElementById("mainButton");

myButton.addEventListener("onClick",displayImage);

displayImage();