


$(document).ready(function() {

    

var ryu =
{
  name: "ryu",
  baseAttack: 5,
  Attack: 5,
  imageSelect: '<img class="characterSelect" src="assets/images/ryu_character_select.jpg" />',
  announcerSound: "assets/sounds/snd_se_narration_characall_Snake.wav",
}

var ken =
{
  name: "ken",
  baseAttack: 5,
  Attack: 5,
  imageSelect: '<img class="characterSelect" src="assets/images/ken_character_select.jpg" />',
  announcerSound: "assets/sounds/snd_se_narration_characall_Snake.wav",
}

var guile =
{
  name: "guile",
  baseAttack: 5,
  Attack: 5,
  imageSelect: '<img class="characterSelect" src="assets/images/guile_character_select.jpg" />',
  announcerSound: "assets/sounds/snd_se_narration_characall_Snake.wav",
}

var bison =
{
  name: "bison",
  baseAttack: 5,
  Attack: 5,
  imageSelect: '<img class="characterSelect" src="assets/images/bison_character_select.jpg" />',
  announcerSound: "assets/sounds/snd_se_narration_characall_Snake.wav",
}

var vega =
{
  name: "vega",
  baseAttack: 5,
  Attack: 5,
  imageSelect: '<img class="characterSelect" src="assets/images/vega_character_select.jpg" />',
  announcerSound: "assets/sounds/snd_se_narration_characall_Snake.wav",
}

var sagat =
{
  name: "sagat",
  baseAttack: 5,
  Attack: 5,
  imageSelect: '<img class="characterSelect" src="assets/images/sagat_character_select.jpg" />',
  announcerSound: "assets/sounds/snd_se_narration_characall_Snake.wav",
}

characterArray = [ryu, ken, guile];
enemyArray = [bison, sagat, vega];

charDivArray = ["#character1", "#character2", "#character3"];
enemyDivArray = ["#enemy1", "#enemy2", "#enemy3"];







var characterChosen = false;
var enemyChosen = false;
var character = "";
var enemy = "";

function fightStage()
{


    console.log("CHARACTER "+character);
    console.log("enemy " +enemy);

    $( "#character1" ).empty();
    $( "#character2" ).hide();
    $( "#character3" ).hide();

    $( "#enemy1" ).empty();
    $( "#enemy2" ).hide();
    $( "#enemy3" ).hide();

   

    $("#character1").prepend(eval(character).imageSelect);
    $("#enemy1").prepend(eval(enemy).imageSelect);


}


for (i = 0; i<characterArray.length; i++)
{
    $(charDivArray[i]).prepend(characterArray[i].imageSelect);
    $(enemyDivArray[i]).prepend(enemyArray[i].imageSelect);

    console.log(characterArray[i]);
}


$(".character").on("click", function() {
    
    if(!characterChosen)
    {
      character = $(this).val();
      console.log("Character "+character);
      characterChosen = true;
    }

    });


$(".enemy").on("click", function() {
    
    if(characterChosen && !enemyChosen)
    {
        enemy = $(this).val();
        console.log("Character "+enemy);
        enemyChosen = true;
    }

    if(enemyChosen)
    {   
        console.log("WE ARE HERE NOW");
        fightStage();
    }


    
        });





        
/*
secondNumber += $(this).val();
$("#second-number").text(secondNumber);*/


/*
    $('#character1').prepend(ryu.imageSelect)
    $('#character2').prepend(ken.imageSelect)
    $('#character3').prepend(guile.imageSelect)
    $('#enemy1').prepend(bison.imageSelect)
    $('#enemy2').prepend(sagat.imageSelect)
    $('#enemy3').prepend(vega.imageSelect)




    $("#character1").on("click", function()
    {
        if (!characterChosen)
        {
            characterChosen = true;
            console.log("chose1");
        }
    });
    $("#character2").on("click", function()
    {
        if (!characterChosen)
        {
            characterChosen = true;
            console.log("chose2");
        }
    });
    $("#character3").on("click", function()
    {
        if (!characterChosen)
        {
            characterChosen = true;
            console.log("chose3");
        }
    });

    




    $("#enemy1").on("click", function()
    {
        if (characterChosen)
        {
            enemyChosen = true;
            console.log("chose1");
        }
    });
    $("#enemy2").on("click", function()
    {
        if (characterChosen)
        {
            enemyChosen = true;
            console.log("chose2");
        }
    });
    $("#enemy3").on("click", function()
    {
        if (characterChosen)
        {
            enemyChosen = true;
            console.log("chose3");
        }
    });


    if(characterChosen && enemyChosen)
    console.log("WE DID IT");*/


});

