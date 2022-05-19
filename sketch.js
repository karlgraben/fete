let fr = 30;
let img;

let xpos, ypos; // Starting position of shape
let xpos_1, ypos_1, xpos_2, ypos_2, xpos_3, ypos_3;

let xspeed = 4; // Speed of the shape
let yspeed = 4; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

let xdirection_1 = -1;
let ydirection_1 = -1;

// const images = [5];

function preload(){
    // for (i = 1; i < 5; i++){
    //     images[i] = loadImage("assets/"+i+".png");
    // }
    img_1 = loadImage("assets/1.png");
    img_2 = loadImage("assets/2.png");
    img_3 = loadImage("assets/3.png");
    img_4 = loadImage("assets/4.png");
    img_5 = loadImage("assets/5.png");
    img_6 = loadImage("assets/6.png");
    // img_7 = loadImage("assets/7.png");
    // img_8 = loadImage("assets/8.png");   
}

function setup() {
    // code for setup
    if (displayWidth > 900) {
        createCanvas(displayWidth, displayHeight);
    } else {
        createCanvas(displayWidth, displayWidth*6);
    }
    noStroke();
    frameRate(fr);
    background(40,40,40);

    textAlign(LEFT);

    xpos_1 =  width / 2;
    ypos_1 = height / 2;

    xpos_2 =  width / 3;
    ypos_2 = height / 3;

    xpos_3 =  width / 4;
    ypos_3 = height / 4;

    xpos_4 =  width / 5;
    ypos_4 = height / 6;

    xpos_5 =  width / 2;
    ypos_5 = height / 1.3;

    xpos_6 =  width / 6;
    ypos_6 = height / 1.2;

    xpos_7 =  width / 1.5;
    ypos_7 = height / 4;

    xpos_8 =  width / 2;
    ypos_8 = height / 4;

}

function draw(){

    //Better approach:
    // const images = [img_1, img_2, img_3, img_4, img_5, img_6]
    // for (let img of images){
        // image(img, xpos, ypos, 50, 50)
    // }

   // Update position of image
    xpos_1 = xpos_1 + xspeed * xdirection;
    ypos_1 = ypos_1 + yspeed * ydirection;

    xpos_2 = xpos_2 + xspeed * xdirection;
    ypos_2 = ypos_2 + yspeed * ydirection;

    xpos_3 = xpos_3 + xspeed * xdirection;
    ypos_3 = ypos_3 + yspeed * ydirection;

    xpos_4 = xpos_4 + xspeed * xdirection;
    ypos_4 = ypos_4 + yspeed * ydirection;

    xpos_5 = xpos_5 + xspeed * xdirection;
    ypos_5 = ypos_5 + yspeed * ydirection;

    xpos_6 = xpos_6 + xspeed * xdirection;
    ypos_6 = ypos_6 + yspeed * ydirection;

    // xpos_7 = xpos_7 + xspeed * xdirection;
    // ypos_7 = ypos_7 + yspeed * ydirection;
 
    // xpos_8 = xpos_8 + xspeed * xdirection;
    // ypos_8 = ypos_8 + yspeed * ydirection;
 
    // xpos_9 = xpos_9 + xspeed * xdirection;
    // ypos_9 = ypos_9 + yspeed * ydirection;

    const xpos = [xpos_1, xpos_2];
    const ypos = [ypos_1, ypos_2];

    // Test to see if the shape exceeds the boundaries of the screen
    // If it does, reverse its direction by multiplying by -1
    if (xpos_1 > width - 10 || xpos_1 < 10) {
        xdirection *= -1;
    }
    if (ypos_1 > height - 10 || ypos_1 < 10) {
        ydirection *= -1;
    }

    if (xpos_2 > width - 10 || xpos_2 < 10) {
        xdirection *= -1;
    }
    if (ypos_2 > height - 10 || ypos_2 < 10) {
        ydirection *= -1;
    }

    if (xpos_3 > width - 10 || xpos_3 < 10) {
        xdirection *= -1;
    }
    if (ypos_3 > height - 10 || ypos_3 < 10) {
        ydirection *= -1;
    }

    if (xpos_4 > width - 10 || xpos_4 < 10) {
        xdirection *= -1;
    }
    if (ypos_4 > height - 10 || ypos_4 < 10) {
        ydirection *= -1;
    }

    if (xpos_5 > width - 10 || xpos_5 < 10) {
        xdirection *= -1;
    }
    if (ypos_5 > height - 10 || ypos_5 < 10) {
        ydirection *= -1;
    }

    // Draw the image
    image(img_1, xpos_1, ypos_1, 50, 50);
    image(img_2, xpos_2, ypos_2, 50, 50);
    image(img_3, xpos_3, ypos_3, 50, 50);
    image(img_4, xpos_4, ypos_4, 50, 50);
    image(img_5, xpos_5, ypos_5, 50, 50);
    image(img_6, xpos_6, ypos_6, 50, 50);
    // image(img_7, xpos_7, ypos_7, 50, 50);
    // image(img_8, xpos_8, ypos_8, 50, 50);
    // image(img_9, xpos_9, ypos_9, 50, 50);

    // Text
    let capital = 'Hallo Freund*innen!';
    textSize(40);
    fill(255,200,0);
    text(capital, 5, 10, displayWidth -5);

    let maintext_1 = 'Nach einiger Zeit des geduldigen und respektvollen Abstandhaltens kann die ganze innere Anspannung mal wieder mit einem ekstatischen Rausch des gemeinsamen Abzappelns überwunden werden. Daher wollen wir mit euch und uns eine wohltuende Fete in unserem Palais zelebrieren. Natürlich ist für dufte DJs, welche tanzbare Rhythmen präsentieren, eine flippige Atmosphäre mit der ein oder anderen Überraschung und Drinks gesorgt. Es ist aber auch durchaus erwünscht, dass ihr noch selber das ein oder andere Getränk mitbringt! Da für uns ein paar Unkosten entstehen, steht es euch frei, uns über den folgenden Link mit etwas monetärer Liebe zu versorgen:'
    textSize(25);
    fill(255, 255, 255);
    text(maintext_1, 5, 80, displayWidth - 5);

    let link = createA('http://p5js.org/', 'Hier monetäre Liebe spenden', '_blank');
    link.position(displayWidth / 4, displayWidth*2);

    let maintext_2 = 'Was gibt es sonst noch so zu erzählen? Ach ja, das Wichtigste: Wir freuen uns alle überdimensional auf euch und den gemeinsamen Abend. Es ist ja auch schon ein, zwei Jahre her, dass wir einen großen Haufen von Freund*innen und Freunden von Freundinnen in Zeit und Raum fusionieren konnten!'
    textSize(25);
    fill(255, 255, 255);
    text(maintext_2, 5, displayWidth*2 + 70, displayWidth - 5);

    let people = 'Dicke Küsschen von Cynthia, Eli, Gideon, Jonny, Moritz, Nora, Roberto, Sophia und Tabea'
    textSize(18);
    fill(255,255,255);
    text(people, 5, displayWidth*3, displayWidth -5);


    let info1 = '30_july_2022_9pm'
    let info2 = '_____aachen'
    textheight_info = 15
    textSize(textheight_info);
    text(info1, 5, displayWidth*6 - textheight_info*3, displayWidth - 5);
    text(info2, 5, displayWidth*6 - textheight_info*2, displayWidth - 5);
}
