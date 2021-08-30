function setup()
{
canvas=createCanvas(640,480);
canvas.position(150,150);
video=createCapture(VIDEO);
video.hide();
}

function draw()
{
image(video,230,150,220,240);

fill(255,0,0);
stroke(255,0,0);
circle(50,50,80);

fill(190, 0, 219);
stroke(190, 0, 219);
rect(90,40,460,20);

fill(255,0,0);
stroke(255,0,0);
circle(50,50,80);

fill(190, 0, 219);
stroke(190, 0, 219);
rect(90,40,460,20);

fill(255,0,0);
stroke(255,0,0);
circle(50,50,80);

fill(190, 0, 219);
stroke(190, 0, 219);
rect(90,40,460,20);

fill(255,0,0);
stroke(255,0,0);
circle(50,50,80);

fill(190, 0, 219);
stroke(190, 0, 219);
rect(90,40,460,20);

rect(90,40,460,20);
}