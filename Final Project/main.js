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
    })

    $('ui-button > input').click(function(){
        $(this).toggleClass('.ui-check', addOrRemove)
    });
});