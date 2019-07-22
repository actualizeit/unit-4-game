
  
  
  
  
  
$(document).ready(function() {
    heroPicked = false;


    $(".character").on("click", function() {
        console.log(heroPicked)
        if(heroPicked == false){
        $(this).appendTo($("#yourCharacter"));
        $(".placeholder").css("display","none")
        $(this).removeClass('character');
        $(this).addClass('myGuy');
        $(".character").appendTo($('#avalableEnemies'));
        heroPicked = true;
        console.log(this);
    }else{
        if($(this).hasClass("character")){
        $(this).appendTo($("#defender"));
        $(this).removeClass('character');
        $(this).addClass('enemy');
        console.log(this);
    }
    }
    });
      
    
    
    


});

// An object to hold the stats of each character:
        //Health Points, Attack Power, and Counter Attack Power