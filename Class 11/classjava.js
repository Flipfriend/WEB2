var switchLogo = function(){

    var imgCurrentSrc = document.getElementById('logo').src;
    console.log(imgCurrentSrc)
    var src1 = 'images/pepsilogo.png';
    var src2 = 'images/pepsi2.png';
    console.log(src2)

    if (imgCurrentSrc === src1){
        document.getElementById('logo').src = src2;
    }
    else{
        document.getElementById('logo').src = src1;
    }
}

document.getElementById('logoSwitch').addEventListener('click', switchLogo);