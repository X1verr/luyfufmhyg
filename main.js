img = "";


function setup() {
    canvas= createCanvas(640, 420);
    canvas.center();
}

function preload(){
    img = loadImage('tv.jpg')
}

function setup() {
    canvas =  createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420)
    fill("#cf0502");
    text("Tv", 45, 75);
    noFill();
    stroke("#cf0502");
    rect(30, 60, 450, 350 );
}