


$(document).ready(function() {

    

var ryu =
{
  name: "ryu",
  baseAttack: 5,
  attack: 5,
  health: 100,
  originalHealth: 100,
}

var ken =
{
  name: "ken",
  baseAttack: 4,
  attack: 4,
  health: 125,
  originalHealth: 125,
}

var guile =
{
  name: "guile",
  baseAttack: 3,
  attack: 3,
  health: 150,
  originalHealth: 150,

}

var bison =
{
  name: "bison",
  baseAttack: 20,
  attack: 20,
  health: 200,
  originalHealth: 200,  
}

var vega =
{
  name: "vega",
  baseAttack: 5,
  attack: 5,
  health: 100,
  originalHealth: 100,
}

var sagat =
{
  name: "sagat",
  baseAttack: 5,
  attack: 5,
  health: 150,
  originalHealth: 150,
}

var characterArray = [ryu, ken, guile, bison, sagat, vega];



var character = "";
var enemy = "";

function play(){

for (i = 0 ; i<characterArray.length; i++)
{
    characterArray[i].health = characterArray[i].originalHealth;
    characterArray[i].attack = characterArray[i].baseAttack;

}
    rewrite();
    
    
    
    
    
    $("#ryu").show();
    $("#ken").show();
    $("#guile").show();


    $("#attackContainer").hide();
    $("#enemyContainer").hide();
    $("#defenderStatus").hide();
    $("#defenderContainer").hide();


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

function rewrite()

{
    var characterDiv = "#"+character.name+"Health";
    $(characterDiv).text(character.health);
    $("#characterAttack").text(character.attack);

    var enemyHealthDiv = "#"+enemy.name+"Health";
    $(enemyHealthDiv).text(enemy.health);
}


function toDiv(text)
{
    var div = "#"+text;
    return div; 
}



$(".character").on("click", function() {

    

    $( "#ryu" ).hide();
    $( "#ken" ).hide();
    $( "#guile" ).hide();

    $("#characterStatus").html("<h1>YOUR CHARACTER</h1>");
    character = $(this).val();
    $(this).show();
    

    enemyStage();
    
});


$(".enemy").on("click", function() {
    
    enemy = $(this).val();
    $(this).detach().appendTo("defender");
    $("#enemyContainer").hide();
    $("#attackContainer").show();
    $("#playButton").hide();

    $("#defenderContainer").show();
    $("#defenderStatus").show();

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
        $("#fightStatus").hide();

        //$("defender").empty();

        var characterDiv = "#"+character.name;
        $(characterDiv).hide();
        $("#characterStatus").html("<h1> YOU LOST! PLAY AGAIN? </h1>");
        $("#playButton").show();

    
    }
    
    if(enemy.health <= 0)
    {    
        $("#fightStatus").empty();
        var enemyDiv = "#"+enemy.name;
        $(enemyDiv).remove();
        $("#enemyContainer").show();
        enemyStage();

    }



});



});

