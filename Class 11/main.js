var switchLogo = function(){
    var imgCurrentSrc = document.getElementById('logo').scroll;

    var src1 = 'images/pepsilogo.png';
    var src2 = 'images/pepsi2.png';

    if (imgCurrentSrc === src1){
        imgCurrentSrc = src2
    }
    else{
        imgCurrentSrc = src1;
    }
}

document.getElementById('switchLogo').addEventListener('click, switchLogo;')