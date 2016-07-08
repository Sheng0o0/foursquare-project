$(document).ready(function(){
    
    $("#search").click(function (evaluate){
        $("#result").empty();
        var place = $("#place").val();
        var food = $('#food').val();
    $.ajax({
        url:"https://api.foursquare.com/v2/venues/search?client_id=TANBIGMKJ5H3TNHMZXDCNU4RTDJR3HZZ3BP2XK20T3PRRBI1&client_secret=R3XNQ1TCZBU4TDF011W4ST3QFRJDMINWUJ0UW55NHILYZX3X&v=20130815&ll=40.7,-74&query="+ food,
        success: function(result){
            for(var i=0;i<10;i++){
            console.log(result.response.venues[i].name);
            console.log(result.response.venues[i].location.address);
            console.log(result.response.venues[i].contact.formattedPhone);
            $("#result").append("<p> Name of the resturant: " +result.response.venues[i].name +" Phone number: "+result.response.venues[i].contact.formattedPhone+" Location: "+ result.response.venues[i].location.address+ "</p>");
        
            }
            }
    });
    
    $("#clear").click(function (evaluate){
        $("#result").empty();
        
        
    });
    });
    
});