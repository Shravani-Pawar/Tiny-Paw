img='';
status="";

function setup()
{
    canvas=createCanvas(600,420);
    canvas.position(400,180);

    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model loaded!!");
    status=true;
    objectDetector.detect(img, gotResult);
    
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function preload()
{
    img=loadImage('images.jpg');
}

function draw()
{
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Cat",320,120);
    noFill();
    stroke("#FF0000");
    rect(190,70,270,320);
}

function gotResult(error,results)
{
if(error)
{
console.log(error);
}
console.log(results);
}

function back()
{
    window.location.replace("index.html");
}