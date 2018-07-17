


$(document).ready(function() {

    

var ryu =
{
  name: "ryu",
  baseAttack: 6,
  attack: 6,
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
  health: 175,
  originalHealth: 175,
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
var wins = 0;


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
    $("#enemyStatus").show();
    $("#attackContainer").hide();
    $("#defenderContainer").hide();
}


//REWRITES ALL DIVS TO VALUES STORED

function rewrite()

{
    var characterDiv = "#"+character.name+"Health";
    $(characterDiv).text(character.health);
    var attackDiv = "#"+character.name+"Attack";
    $(attackDiv).text(character.attack);
   

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

wins = 0;
play();
    
});



// ATTACK STAGE

$("#attackButton").on("click", function() {

    character = eval(character);
    enemy = eval(enemy);


    $("#fightStatus").text(character.name +" attacked " + enemy.name + " for "+ character.attack+" damage!");
    $("#fightStatus").append("<p>"+ enemy.name +" counter attacked for "+enemy.attack +" damage!");
    $("#fightStatus").append("<p>"+ character.name +"'s attack increased by "+character.baseAttack);

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
        $("#enemyContainer").hide();

        var characterDiv = "#"+character.name;
        $(characterDiv).hide();
        $("#characterStatus").html("<h1> YOU LOST! PLAY AGAIN? </h1>");
        $("#playButton").show();

    
    }
    
    if(enemy.health <= 0)
    {   
        wins++;

        var enemyDiv = "#"+enemy.name;
        $(enemyDiv).detach().appendTo("#enemyContainer");
        enemy.visible = false;
        $("#fightStatus").empty();
        $("#attackButton").hide();
        $("#enemyContainer").hide();



        if(wins===3)
        {
            $("#characterStatus").html("<h1> YOU WIN! PLAY AGAIN? </h1>");
            $("#playButton").show();
        }

        else{

            enemyStage();
            rewrite();


        }
       

        
        


        

    }



});



});

