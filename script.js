$(document).ready(function(){
    
    $("#search").click(function (evaluate){
    $("#result").empty();
    var place = $("#place").val();
    var food = $('#food').val();
    
    $.ajax({
        url:"https://api.foursquare.com/v2/venues/search
  ?client_id=TANBIGMKJ5H3TNHMZXDCNU4RTDJR3HZZ3BP2XK20T3PRRBI1
  &client_secret=R3XNQ1TCZBU4TDF011W4ST3QFRJDMINWUJ0UW55NHILYZX3X
  &v=20130815
  &ll=40.7,-74
  &query=sushi",
  success: function(result){
      console.log(result);
  }
    )}:
    
    $("#clear").click(function (evaluate){
        $("#result").empty();
      });
    
    });
});