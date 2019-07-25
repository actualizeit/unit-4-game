
  
  
  
  
  
$(document).ready(function() {
    heroPicked = false;
    enemyAlive = false;

    //Stats: Health Points, Attack Power, Counter Attack Power
    obiWanStats = [140,6,12]
    lukeStats =  [120,7,13]
    sidiousStats =  [150,5,11]
    maulStats =  [170,5,10]
    myGuyStats = [];
    enemyStats = [];
    currentAttackPower = 0;
    attackCounter = 1;
    enemiesCounter = 0;

    $(".obiWanHP").text(obiWanStats[0]);
    $(".lukeHP").text(lukeStats[0]);
    $(".sidiousHP").text(sidiousStats[0]);
    $(".maulHP").text(maulStats[0]);
    $("#yourCharacter").css("display","none");
    $("#avalableEnemies").css("display","none");
    $("#fightSection").css("display","none");
    $("#defender").css("display","none");


    $(".character").on("click", function() {
        console.log(heroPicked)
        if(heroPicked == false){
        $(this).appendTo($("#yourCharacter"));
        $(".placeholder").css("display","none");
        $("#choose").css("display","none");
        $("#yourCharacter").css("display", "inline-block");
        $("#avalableEnemies").css("display", "inline-block");
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
        $("#fightSection").css("display","inline-block");
        $("#defender").css("display","inline-block");
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
        if(enemiesCounter ==2){
            $("#avalableEnemies").hide();
        }
        console.log(enemyStats);
         }
        }
    });

    $("#attackButton").on("click", function() {
        if(heroPicked == true && enemyAlive == true){
            currentAttackPower = myGuyStats[1] * attackCounter;
            enemyStats[0] = enemyStats[0] - currentAttackPower;
            myGuyStats[0] = myGuyStats[0] - enemyStats[2];
            attackCounter++;
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
                enemiesCounter++;
                $(".enemy").hide();
                $("#fightSection").hide();
                $("#defender").hide();
                if(enemiesCounter == 3){
                $("#avalableEnemies").show();
                $("#avalableEnemies").text("Dam yo, you beat em all! Das lit!");
                }
            }
            if(myGuyStats[0] < 1){
                $("#yourCharacter").text("You Died Yo! Das bad.");
                $(".myGuy").hide()
                $("#fightSection").hide();
                $("#defender").hide();
                $("#avalableEnemies").hide();

            }
        }
    });


});