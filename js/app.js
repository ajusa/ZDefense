/*
    TODO
        Actually code the game
        Add Canvas
        Make Zombies a Class
        Make a "Sound System" - An easy and PERFORMANT way to load in music an play it
        Make sure the total file size (not including music) is under 1mb
        Learn from each other
*/

var VERSION;
var HEIGHT;
var WIDTH;

function init(){
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    
    loop();
//I am so pro
//#legyt
}

function loop(){
    //ctx.save() and ctx.restore() are basically how you animate canvases...*
    ctx.save();
        //Drawing code; Javascript equivelant of paint() and repaint()
    ctx.restore();
    /*  Anything outside of ctx.restore() is for
        updating variables, anything not related
        to ctx functions
    */

   // setTimeout(loop, 1000/30); //For 30 fps - not gonna work bruh
   setTimeout(loop,33);
}

// *so I have this book about animating in HTML and it talks about how setTimeout() is a horrible
//  way to animate, I could read a bit further so we have a better way to animate it that would work
//  on all computers the same if it turns out to be important.
//  Arham - Sure, I think that a constant framerte would help performance as well.