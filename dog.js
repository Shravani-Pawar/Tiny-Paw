img='';
status="";

function setup()
{
    canvas=createCanvas(600,420);
    canvas.position(400,200);

    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="It's a....";
}

function modelLoaded()
{
    console.log("Model loaded!!");
    status=true;
    objectDetector.detect(img, gotResult);
    
    document.getElementById("status").innerHTML="It's a dog!";
}
function preload()
{
    img=loadImage('dog.jpg');
}

function draw()
{
    image(img,0,0,640,420);
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