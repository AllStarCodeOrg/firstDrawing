//image reference
//https://s-media-cache-ak0.pinimg.com/236x/be/d9/d0/bed9d063ad11703d2199238d956867f0.jpg

function setup(){
    createCanvas(300,300);
    background(225);

    //round body
    fill("red");
    arc(width/2, height/2, 200,200, 0, PI, CHORD);
    //width is a global variable in p5.js for the width of canvas (which is 300 in this case). width/2 is the center width
    //height is a global variable in p5.js for the width of canvas (which is 300 in this case). height/2 is the center height
    //arc IS an ellipse, but with a starting and ending point. CHORD, simply connects the start and end point.
    fill("white");
    arc(width/2, height/2, 200,200, PI, 0, CHORD);

    //eyes
    strokeWeight(2);
    strokeJoin(ROUND);
    //left eye
    fill("white");
    quad(
        94,87,
        137,120,
        134,126,
        80,128
        );
    fill("black")
    ellipse(110,120,5,10);

    //right eye
    fill("white");
    quad(
        (width/2-94)+width/2,87,
        (width/2-137)+width/2,120,
        (width/2-134)+width/2,126,
        (width/2-80)+width/2,128
        );
    fill("black")
    ellipse((width/2-110)+width/2,120,5,10);

    //dem eyebrows
    strokeWeight(5);
    //left
    line(
        92,78,
        143,120
        );
    //right
    line(
        (width/2-92)+width/2,78,
        (width/2-143)+width/2,120
        );
}

//Helpful for figuring out X and Y locations!
//Have Developer Tools > Console open to see the console log messages
function mouseClicked(){
    console.log("X: " + mouseX + " Y: " + mouseY);
}