let fr = 30;
let img;
var canvas;

function randomminmax(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// let xpos, ypos; // Starting position of shape
let xpos_1, ypos_1, xpos_2, ypos_2, xpos_3, ypos_3;

let xspeed = 4; // Speed of the shape
let yspeed = 4; // Speed of the shape

const xdirection = [];
const ydirection = [];

for (let i = 0; i < 10; i++) {
    xdirection[i] = 1;
    ydirection[i] = 1;
  }

function preload(){
    img_1 = loadImage("assets/1.png");
    img_2 = loadImage("assets/2.png");
    img_3 = loadImage("assets/3.png");
    img_4 = loadImage("assets/4.png");
    img_5 = loadImage("assets/5.png");
    img_6 = loadImage("assets/6.png");
    img_7 = loadImage("assets/7.png");
    img_8 = loadImage("assets/8.png");
    img_9 = loadImage("assets/9.png");
}

function setup() {
    // code for setup
    if (displayWidth > 900) {
        canvas = createCanvas(displayWidth, displayHeight);
        canvas.position(0,0);
        canvas.style('z-index', '-1');
    } else {
        canvas = createCanvas(displayWidth, displayHeight);
        canvas.position(0,0);
        canvas.style('z-index', '-1');
    }

    noStroke();
    frameRate(fr);
    background(40,40,40);

    textAlign(LEFT);

    xpos_1 =  width /1.5;
    ypos_1 = height/2;

    xpos_2 =  width / 3;
    ypos_2 = height / 2;

    xpos_3 =  width / 4;
    ypos_3 = height / 4;

    xpos_4 =  width / 5;
    ypos_4 = height / 5;

    xpos_5 =  width / 2;
    ypos_5 = height / 5.5;

    xpos_6 =  width / 6;
    ypos_6 = height / 5;

    xpos_7 =  width / 3.2;
    ypos_7 = height / 3.2;

    xpos_8 =  width / 2.7;
    ypos_8 = height / 1.5;

    xpos_9 =  width/ 2.3;
    ypos_9 = height / 1.1;
}

function draw(){

   // Update position of image
    xpos_1 = xpos_1 + xspeed * xdirection[0];
    ypos_1 = ypos_1 + yspeed * ydirection[0];
    xpos_2 = xpos_2 + xspeed * xdirection[1];
    ypos_2 = ypos_2 + yspeed * ydirection[1];
    xpos_3 = xpos_3 + xspeed * xdirection[2];
    ypos_3 = ypos_3 + yspeed * ydirection[2];
    xpos_4 = xpos_4 + xspeed * xdirection[3];
    ypos_4 = ypos_4 + yspeed * ydirection[3];
    xpos_5 = xpos_5 + xspeed * xdirection[4];
    ypos_5 = ypos_5 + yspeed * ydirection[4];
    xpos_6 = xpos_6 + xspeed * xdirection[5];
    ypos_6 = ypos_6 + yspeed * ydirection[5];
    xpos_7 = xpos_7 + xspeed * xdirection[6];
    ypos_7 = ypos_7 + yspeed * ydirection[6];
    xpos_8 = xpos_8 + xspeed * xdirection[7];
    ypos_8 = ypos_8 + yspeed * ydirection[7];
    xpos_9 = xpos_9 + xspeed * xdirection[8];
    ypos_9 = ypos_9 + yspeed * ydirection[8];
 
    // Test to see if the shape exceeds the boundaries of the screen
    // If it does, reverse its direction by multiplying by -1
    if (xpos_1 > width - 50) {
        xdirection[0] *=-1;
    }
    if (xpos_1 < 0) {
        xdirection[0] *=-1;
    }
    if (ypos_1 > height - 50 || ypos_1 < 10) {
        ydirection[0] *= -1;
    }
    if (xpos_2 > width - 50 || xpos_2 < 10) {
        xdirection[1] *= -1;
    }
    if (ypos_2 > height - 50 || ypos_2 < 10) {
        ydirection[1] *= -1;
    }

    if (xpos_3 > width - 50 || xpos_3 < 10) {
        xdirection[2] *= -1;
    }
    if (ypos_3 > height - 50 || ypos_3 < 10) {
        ydirection[2] *= -1;
    }

    if (xpos_4 > width - 50 || xpos_4 < 10) {
        xdirection[3] *= -1;
    }
    if (ypos_4 > height - 50 || ypos_4 < 10) {
        ydirection[3] *= -1;
    }

    if (xpos_5 > width - 50 || xpos_5 < 10) {
        xdirection[4] *= -1;
    }
    if (ypos_5 > height - 50 || ypos_5 < 10) {
        ydirection[4] *= -1;
    }

    if (xpos_6 > width - 50 || xpos_6 < 10) {
        xdirection[5] *= -1;
    }
    if (ypos_6 > height - 50 || ypos_6 < 10) {
        ydirection[5] *= -1;
    }
    
    if (xpos_7 > width - 50 || xpos_7 < 10) {
        xdirection[6] *= -1;
    }
    if (ypos_7 > height - 50 || ypos_7 < 10) {
        ydirection[6] *= -1;
    }

    if (xpos_8 > width - 50 || xpos_8 < 10) {
        xdirection[7] *= -1;
    }
    if (ypos_8 > height - 50 || ypos_8 < 10) {
        ydirection[7] *= -1;
    }

    if (xpos_9 > width - 50 || xpos_9 < 10) {
        xdirection[8] *= -1;
    }
    if (ypos_9 > height - 50 || ypos_9 < 10) {
        ydirection[8] *= -1;
    }

    // Draw the image
    image(img_1, xpos_1, ypos_1, 50, 50);
    image(img_2, xpos_2, ypos_2, 50, 50);
    image(img_3, xpos_3, ypos_3, 50, 50);
    image(img_4, xpos_4, ypos_4, 50, 50);
    image(img_5, xpos_5, ypos_5, 50, 50);
    image(img_6, xpos_6, ypos_6, 50, 50);
    image(img_7, xpos_7, ypos_7, 50, 50);
    image(img_8, xpos_8, ypos_8, 50, 50);
    image(img_9, xpos_9, ypos_9, 50, 50);
}
