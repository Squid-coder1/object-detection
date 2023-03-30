cocossd="";

function preload()
{
    apple = loadImage('diningroom.webp');  
}

function setup()
{
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    canvas = createCanvas(screen_width,screen_height-50);
    canvas.position(0,150);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function gotResult(error,results){
    if(error) {
      console.log(error);
    }
   console.log(results);
   object=results;
  }