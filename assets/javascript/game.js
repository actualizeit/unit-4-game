
  
  
  
  
  
$(document).ready(function() {
    heroPicked = false;
    enemyAlive = false;

    //Stats: Health Points, Attack Power, Counter Attack Power
    obiWanStats = [140,6,12]
    lukeStats =  [120,8,14]
    sidiousStats =  [150,6,10]
    maulStats =  [180,8,8]
    myGuyStats = [];
    enemyStats = [];
    currentAttackPower = 0;
    counter = 1;

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
        if($(this).is('#obiWan')){
            myGuyStats = obiWanStats
        }
        if($(this).is('#luke')){
            myGuyStats = lukeStats
        }
        if($(this).is('#sidious')){
            myGuyStats = sidiousStats
        }
        if($(this).is('#maul')){
            myGuyStats = maulStats
        }
        console.log(myGuyStats);
    }else{
        if($(this).hasClass("character") && enemyAlive == false){
        $(this).appendTo($("#defender"));
        $(this).removeClass('character');
        $(this).addClass('enemy');
        enemyAlive = true;
        if($(this).is('#obiWan')){
            enemyStats = obiWanStats
        }
        if($(this).is('#luke')){
            enemyStats = lukeStats
        }
        if($(this).is('#sidious')){
            enemyStats = sidiousStats
        }
        if($(this).is('#maul')){
            enemyStats = maulStats
        }
        console.log(enemyStats);
         }
        }
    });

    $("#attackButton").on("click", function() {
        if(heroPicked == true && enemyAlive == true){
            currentAttackPower = myGuyStats[1] * counter;
            enemyStats[0] = enemyStats[0] - currentAttackPower;
            myGuyStats[0] = myGuyStats[0] - enemyStats[2];
            counter++;
            if($(".myGuy").is('#obiWan')){
                $(".obiWanHP").text(myGuyStats[0]);
            }
            if($(".myGuy").is('#luke')){
                $(".lukeHP").text(myGuyStats[0]);
            }
            if($(".myGuy").is('#sidious')){
                $(".sidiousHP").text(myGuyStats[0]);
            }
            if($(".myGuy").is('#maul')){
                $(".maulHP").text(myGuyStats[0]);
            }
            if($(".enemy").is('#obiWan')){
                $(".obiWanHP").text(enemyStats[0]);
            }
            if($(".enemy").is('#luke')){
                $(".lukeHP").text(enemyStats[0]);
            }
            if($(".enemy").is('#sidious')){
                $(".sidiousHP").text(enemyStats[0]);
            }
            if($(".enemy").is('#maul')){
                $(".maulHP").text(enemyStats[0]);
            }
            if(enemyStats[0] < 1){
                enemyAlive = false;
                $(".enemy").hide();
            }
            if(myGuyStats[0] < 1){
                
            }
        }
    });


      
    
    
    


});

// An object to hold the stats of each character:
        //Health Points, Attack Power, and Counter Attack Power