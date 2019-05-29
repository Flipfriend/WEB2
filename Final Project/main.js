$(document).ready(function(){
    
    $('#navbar1').hide();
    
    $('#mnubtn').click(function(){
        $('#navbar1').toggle("slow");
        console.log('fire!')
    });    
});