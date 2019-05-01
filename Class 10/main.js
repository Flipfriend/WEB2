var srcImg = document.getElementById('kittyImg2');

var imagesArray = ["images/kitten0.jpg","images/kitten1.jpg","images/kitten2.jpg","images/kitten3.jpg","images/kitten4.jpg"]



function displayImage(){
    var num = Math.floor(Math.random()*5);
    document.getElementById('kittyImg2').src= imagesArray[num];
}


var myButton = document.getElementById('mainButton');

myButton.addEventListener("click", displayImage);


displayImage();

