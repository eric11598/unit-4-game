


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

function enemyStage()
{


    console.log("CHARACTER "+character);
    console.log("enemy " +enemy);

    $("#enemyStatus").show();
    $( "#enemy1" ).show();
    $( "#enemy2" ).show();
    $( "#enemy3" ).show();

   

    //$("#character1").prepend(eval(character).imageSelect);
    //$("#enemy1").prepend(eval(enemy).imageSelect);


}

/*
for (i = 0; i<characterArray.length; i++)
{
    $(charDivArray[i]).append(characterArray[i].imageSelect);
    $(enemyDivArray[i]).prepend(enemyArray[i].imageSelect);

    console.log(characterArray[i]);
}*/

$("#enemyStatus").hide();
$("#enemy1").hide();
$("#enemy2").hide();
$("#enemy3").hide();


$("#defenderStatus").hide();
//$("#defender1").hide();
$("#defender2").hide();
$("#defender3").hide();


$(".character").on("click", function() {

    $( "#character1" ).hide();
    $( "#character2" ).hide();
    $( "#character3" ).hide();

    $("#characterStatus").html("<h1>YOUR CHARACTER</h1>");
    character = $(this).val();
    $(this).show();
    
    characterChosen = true;
    enemyStage();
    
});


$(".enemy").on("click", function() {
    
    enemy = $(this).val();
    //$(this).hide();

    console.log(this.value);

    var temp = '<div id = "defender1" style="float:left"></div>'

    $(this).appendTo("defender");


    $("#defenderStatus").show();
    console.log("WERE hEREEE NOWWWWW "+enemy);
    enemyChosen = true;
    
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

