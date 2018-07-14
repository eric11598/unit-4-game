


$(document).ready(function() {

    

var ryu =
{
  name: "ryu",
  baseAttack: 5,
  attack: 5,
  health: 100,
  originalHealth: 100,
  visible: true,
}

var ken =
{
  name: "ken",
  baseAttack: 4,
  attack: 4,
  health: 125,
  originalHealth: 125,
  visible: true,
}

var guile =
{
  name: "guile",
  baseAttack: 3,
  attack: 3,
  health: 150,
  originalHealth: 150,
  visible: true,

}

var bison =
{
  name: "bison",
  baseAttack: 20,
  attack: 20,
  health: 200,
  originalHealth: 200,
  div: "#bison",
  visible: true,
}

var vega =
{
  name: "vega",
  baseAttack: 5,
  attack: 5,
  health: 100,
  originalHealth: 100,
  div: "#vega",
  visible: true,
}

var sagat =
{
  name: "sagat",
  baseAttack: 5,
  attack: 5,
  health: 150,
  originalHealth: 150,
  div: "#sagat",
  visible: true,
}

var characterArray = [ryu, ken, guile, bison, sagat, vega];



var character = "";
var enemy = "";

function play(){

for (i = 0 ; i<characterArray.length; i++)
{
    characterArray[i].health = characterArray[i].originalHealth;
    characterArray[i].attack = characterArray[i].baseAttack;
    characterArray[i].visible = true;
}
    rewrite();
    
    
    
    $("#graveyard").show();
    
    $("#ryu").show();
    $("#ken").show();
    $("#guile").show();


    $("#attackContainer").hide();
    $("#enemyContainer").hide();
    $("#defenderContainer").hide();
    $("#playButton").hide();


    $("#characterStatus").html("<h1>PICK YOUR CHARACTER</h1>");
    $("#characterContainer").show();

}

play();


function enemyStage()
{
    $("#enemyContainer").show();
    $("#attackContainer").hide();
    $("#defenderContainer").hide();
}


//REWRITES ALL DIVS TO VALUES STORED

function rewrite()

{
    var characterDiv = "#"+character.name+"Health";
    $(characterDiv).text(character.health);
    $("#characterAttack").text(character.attack);

    for(i = 0; i<characterArray.length; i++)
    {
        
        var enemyHealthDiv = "#"+characterArray[i].name+"Health";
        $(enemyHealthDiv).text(characterArray[i].health);
        
        if(!characterArray[i].visible)
        $(characterArray[i].div).hide();

        else
        $(characterArray[i].div).show();
    }
    
}

//CLICK A CHARACTER

$(".character").on("click", function() {


    $( "#ryu" ).hide();
    $( "#ken" ).hide();
    $( "#guile" ).hide();

    $("#characterStatus").html("<h1>YOUR CHARACTER</h1>");
    character = $(this).val();
    $(this).show();
    

    enemyStage();
    
});

//CLICK AN ENEMY

$(".enemy").on("click", function() {
    
    enemy = $(this).val();
    $(this).detach().appendTo("defender");
    $("#enemyContainer").hide();
    $("#attackContainer").show();
    $("#playButton").hide();

    $("#defenderContainer").show();


    $("#attackButton").show();

    
});

$("#playButton").on("click", function() {
    
console.log("LOLOLOL");
play();
    
});



// ATTACK STAGE

$("#attackButton").on("click", function() {

    character = eval(character);
    enemy = eval(enemy);


    $("#fightStatus").text(character.name +" ATTACKED " + enemy.name + " FOR "+ character.attack+" DAMAGE!");
    $("#fightStatus").append("<p>"+ enemy.name +" COUNTER ATTACKED FOR "+enemy.attack +" damage!");

    character.health-=enemy.attack;
    enemy.health-=character.attack;
    character.attack+=character.baseAttack;
    
    rewrite();

    if(character.health <= 0)
    {
        //LOSE GAME CODE
        $("#attackButton").hide();
        $("#defenderContainer").hide();
        $("#fightStatus").text("");

        $(enemy.div).detach().appendTo("#enemyContainer");
        

        var characterDiv = "#"+character.name;
        $(characterDiv).hide();
        $("#characterStatus").html("<h1> YOU LOST! PLAY AGAIN? </h1>");
        $("#playButton").show();

    
    }
    
    if(enemy.health <= 0)
    {    
        $("#fightStatus").empty();
        var enemyDiv = "#"+enemy.name;
        $(enemyDiv).detach().appendTo("#enemyContainer");
        enemy.visible = false;
        $("#enemyContainer").show();
        enemyStage();
        rewrite();

    }



});



});

