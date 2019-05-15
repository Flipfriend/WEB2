$(document).ready(function(){
    $('body').css('background-color','red');
    $('.header').css('color','#fefefe');
   
    $('#colorToggle').click(function(){
        $('.container').toggleClass('blue-container');
    })

    // $('.container').append('<div class="container-child">I am child 2 </div>');

    // $('.container').prepend('<div class="container-child">I am child 3 </div>')

    // $('.container').after('<div class="addon">I am AFTER!!!!</div>')

    // $('.container').before('<div class="addon">I am BEFORE!!!!</div>')

    // $('<div class="container-child">I am child 4</div>').appendTo('.container');
    // $('<div class="container-child">I am child 5</div>').prependTo('.container');


    $('#btn1').click(function(){
        $('.container').append('<div class="container-child">I am child 2 </div>');
        $('<div class="container-child">I am child 4</div>').appendTo('.container');
        $('.container').after('<div class="addon">I am AFTER!!!!</div>');
    })
// prepend and before
    $('#btn2').click(function(){
        $('.container').prepend('<div class="container-child">I am child 3 </div>');
        $('<div class="container-child">I am child 5</div>').prependTo('.container');
        $('.container').before('<div class="addon">I am BEFORE!!!!</div>');
    })

    // remove addon button
    $('#btn3').click(function(){
        $('.addon').remove();
    })
    // empty container
    $('#btn4').click(function(){
        $('.container').empty();
    })

    // *******FORM***********

    $('#myName').blur(function(){
        console.log($('#myName').val() );

        if($('#myName').val() === "Maxim"){

            $('#myEmail').val('safiolline_maxim@smc.edu');
        }
    })

// ************** ANIMATION  *********

    $('#FX').change(function(){
        var selection = $('#FX').val();
        if(selction === "show"){
            $('.box').show();
            }
        else if(selction === 'hide'){
            $('.box').hide();
        }
        else if(selction === 'fadein'){
            $('.box').fadeIn();
        }
        else if(selction === 'fadeout'){
            $('.box').fadeOut() ;
        }
        else if(selection === 'slideup'){
            $('.box').slideUp();
        }
        else if(selection === 'slidedown'){
            $('.box').slideDown();
        }
    })
})