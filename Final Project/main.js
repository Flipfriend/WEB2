$(document).ready(function(){
    // hide nav on load
    $('#navbar1').hide();
    // Menu toggle    
    $('#mnubtn').click(function(){
        $('#navbar1').toggle("slow");
        console.log('fire!')
    });    
// thank you message at submit
    $('form').submit(function(event){
        event.preventDefault();
    });
// monthly radio button if checked swap class .monthly-gift for .one-time-gift
    $('input[name=payment-type]:radio').click(function(){
       $('.one-time-gift').slideToggle('.monthly-gift')
       $('.monthly-gift').slideToggle()       
    });
});