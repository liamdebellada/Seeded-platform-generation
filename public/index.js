var x = 50;
function setup() { 
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(240,248,255)
    for (var i = 0; i < 5; i++) {
        //console.log(seeded)
        seeded = seeded + 100
        console.log(seeded)
        rect(seeded, 50, 50, 50)
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function userPref() {
    var max = 20;
    var min = 0;
    userSeed = document.getElementById("seedVal").value;

    var seed = new Math.seedrandom(userSeed)
    seeded = Math.floor(seed() * (max - min + 1)) + min;
    //console.log(seeded)
    draw(seeded)
}