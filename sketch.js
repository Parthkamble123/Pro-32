const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var hour;

function preload() {
   
    // create getBackgroundImg( ) here
   getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg ){
        background(backgroundImg);
        }


    Engine.update(engine);

    // write code to display time in correct format here
    
  

}



async function getBackgroundImg(){

    // write code to fetch changetime from API
var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
  var responseJson = await response.json();
  var datetime = responseJson.datetime;
    // write code slice the datechangetime
     hour= datetime.slice(11,13)

    // add conditions to change the background images from sunrise to sunset
   if(hour>=06 && hour<=08){
      bg = "sunrise1.png";
   }else if(hour>=08 && hour<=10){
      bg = "sunrise3.png";
   }else if(hour>=10 && hour<=12){
      bg = "sunrise5.png";
   }else if(hour>=12 && hour<=14){
      bg = "sunrise6.png";
   }else if(hour>=14 && hour<17){
      bg = "sunset7.png";
   }else if(hour>=17 && hour<=20){
      bg = "sunset10.png";
   }else if(hour>=20 && hour<=24){
      bg = "sunset12.png"
   }

    
    
    
    //load the image in backgroundImg variable here
  backgroundImg = loadImage(bg);
}
