var font;
//var vehicles = [];

var rainbow = false;

//var points;
var wordVehicles = [];
var wordPoints = [];

var TextSize;
var firstgen = false;

var colorLoop = 0;
var loopDir = "UP";

function preload() {
  font = loadFont("welcomeAnimation/avenir-next-lt-pro-demi.otf");
}



function setup() {
  var canvas = createCanvas(1904, 1000);
  canvas.parent("myCanvas");
  canvas.addClass("myCanvas")
  background(51);
  TextSize = width / 8;

  genPoints("Hello There!", width / 2.8, height / 2, TextSize);
  setTimeout(function () {
    beginAnimation();
  }, 2500);

  // $("#defaultCanvas0").css({ 'height': "100%" });
  // $("#defaultCanvas0").css({ 'width': "100%" });  

  cv = document.getElementById("defaultCanvas0");
  cv.style.width = "100%";
  cv.style.height = "auto";
}


function draw() {
  colorMode(RGB);
  background(21, 21, 21, 200);
  if (rainbow) {
    colorMode(HSB);
  }
  
  noStroke();
  fill(40);
  rect(0, height - 2, width, 2);
  fill(40);
  rect(0, height/1.12, width, 1);

  textAlign(CENTER);
  let finished = true;

  for (let i = 0; i < wordVehicles.length; i++) {
    let curVehicles = wordVehicles[i];
    for (let j = 0; j < curVehicles.length; j++) {
      let v = curVehicles[j];
      v.behaviors();
      v.update();
      v.show();
    }
  }

  
  
  cv.style.width = "100%";
  cv.style.height = "auto";
  
 
  rotateRainbow();
}

function keyPressed() {
  if (key == " ") {
    loop();
  }
  if (key == "R") {
    vehicles = [];
    points = [];
    genPoints();
  }
  if (key == "P") {
    rainbow = !rainbow;
  }
}

function genPoints(text, xpos, ypos, size) {
  textSize(TextSize);
  let points = font.textToPoints(text, width / 2 - xpos, ypos, size);
  let vehicles = [];

  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    let vehicle = new Vehicle(pt.x, pt.y);

    // alternating rainbow
    // if (text == "Welcome To My Homepage!") {
    //   vehicle.rainbow = true;
    // }
    vehicles.push(vehicle);
  }

  wordVehicles.push(vehicles);
  wordPoints.push(points);

  
}

function changeText(text, x, y, size, word) {
  let newPoints = font.textToPoints(text, width / 2 - x, y, size);
  let curWord = wordPoints[word];
  let curVehicles = wordVehicles[word];
  let diff = newPoints.length - curWord.length;
  let magDiff = Math.abs(diff);

  if (diff < 0) {
    //splice
  }
  if (diff > 0) {
    for (let i = 0; i < magDiff; i++) {
      let randomIndex = floor(
        random(curVehicles.length - 30, curVehicles.length - 1)
      );
      let pos = curVehicles[randomIndex].pos;
      let newPos = createVector(pos.x, pos.y);

      curVehicles.push(new Vehicle(200, 200, newPos));
    }

    //push
  }

  // change each vehicles target
  for (let i = 0; i < newPoints.length; i++) {
    let pt = newPoints[i];
    curVehicles[i].target = createVector(pt.x, pt.y);

    // alternating rainbow
    // if (word == 1) {
    //   curVehicles[i].rainbow = true;
    // }
  }
  wordPoints[word] = newPoints;
}

function beginAnimation() {
  changeText("Hello There!", width / 2.8, height / 3, 0, 0);

  phase1();
}






function phase1() {
  setTimeout(function () {
    genPoints("Welcome To My Homepage!", width / 2.25, height / 2, 125);
    phase2();
  }, 200);
}
function phase2() {
  setTimeout(function () {
    changeText("Welcome To My Homepage!", width / 2.25, height / 3, 125, 1);
    changeText(
      "See Some of my Projects Here",
      width / 2.25,
      height - 130,
      125,
      0
    );
    phase3();
  }, 3000);
}
function phase3() {
  setTimeout(function () {
    changeText(
      "Welcome To My Homepage!",
      width / 2.09,
      height / 4.2,
      140,
      1
    );
    changeText(
      "See Some of my Projects Here",
      width / 2.25,
      height / 2.5,
      125,
      0
    );

    genPoints("Or Don't :)", width / 2.25, height - 130, 100);
    phase4();
  }, 3500);
}
function phase4() {
  setTimeout(function () {
    changeText("Or Don't, Your Choice :)", width / 2.25, height - 130, 100, 2);
  }, 2000);
}


function rotateRainbow() {
  //let incColor = 2;
  if (loopDir == "UP") {
    colorLoop++;
  } else {
    // colorLoop = lerp(colorLoop, 50, 0.005);
  }
  // if (colorLoop > 256) {
  //   loopDir = "DOWN"
  // }
  // if (colorLoop < 100) {
  //   loopDir = "UP"
  // }
}
