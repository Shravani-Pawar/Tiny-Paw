img='';
status="";
objects=[];

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
    
    document.getElementById("status").innerHTML="It's a....";
}

function gotResult(error,results)
{
    
console.log(results);
objects=results;
if(error)
{
console.log(error);
}
}
function preload()
{
    img=loadImage('frog.jpg');
}

function draw()
{
    image(img,0,0,640,420);
    if(status !="")
    {
        for(i=0; i<objects.length; i++)
        {   document.getElementById("status").innerHTML="It's a "+objects[i].label;

            fill("#FF0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label,objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}

