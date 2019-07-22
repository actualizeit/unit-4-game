
  
  
  
  
  
$(document).ready(function() {
    heroPicked = false;
    enemyAlive = false;
    HPRemaining = this[0];
    attackPower = this[1];
    counterAttackPower = this[2];


    //Stats: Health Points, Attack Power, Counter Attack Power
    obiWanStats = [140,6,12]
    lukeStats =  [120,8,14]
    sidiousStats =  [150,6,10]
    maulStats =  [180,8,8]

    $(".obiWanHP").text(obiWanStats[0]);
    $(".lukeHP").text(lukeStats[0]);
    $(".sidiousHP").text(sidiousStats[0]);
    $(".maulHP").text(maulStats[0]);


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
        if($(this).hasClass("character") && enemyAlive == false){
        $(this).appendTo($("#defender"));
        $(this).removeClass('character');
        $(this).addClass('enemy');
        enemyAlive = true;
        console.log(this);
         }
        }
    });
      
    
    
    


});

// An object to hold the stats of each character:
        //Health Points, Attack Power, and Counter Attack Power