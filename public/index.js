function setup() { 
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(240,248,255)
    rect(windowWidth / 2, 100, 100, 100)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function userPref() {
    var max = 20;
    var min = 0;
    userSeed = document.getElementById("seedVal").value;
    var seed = new Math.seedrandom("")
    seeded = Math.floor(seed() * (max - min + 1)) + min;
    console.log(seeded)
}