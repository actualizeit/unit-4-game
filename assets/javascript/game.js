
  
  
  
  
  
$(document).ready(function() {
    $(".character").on("click", function() {
        $(this).appendTo($("#yourCharacter"));
        $(".placeholder").css("display","none")
    });
      
    
    
    


});

// An object to hold the stats of each character:
        //Health Points, Attack Power, and Counter Attack Power