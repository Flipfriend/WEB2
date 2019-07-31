$(document).ready(function(){
    // hide nav on load
    $('#navbar1').hide();
    // Menu toggle    
    $('#mnubtn').click(function(){
        $('#navbar1').toggle("slow");
        console.log('fire!')
    });    
// thank you message at submit
    $('form').click(function(){
        $('#submit-text').toggle("slow");
    });

// monthly radio button if checked swap class .monthly-gift for .one-time-gift
    $('input[name=payment-type]:radio').click(function(){
       $('.one-time-gift').slideToggle('.one-time-gift')
       $('.monthly-gift').slideToggle()       
    });
});