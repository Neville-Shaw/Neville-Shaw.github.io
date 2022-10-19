

var FlowField = function(f) {


  f.points = [];
  f.inversePoints = [];

  f.volume = 15;

  f.circleSize = 2;

  // var angleMult = 0.005;
  f.angleMult;

  f.circle = 400;

  f.r1;
  f.r2;
  f.g1;
  f.g2;
  f.b1;
  f.b2;

  f.timeElapsed = 0;
  f.backgroundAlpha = 10;


  f.setup = function() {
    // initilize the canvas position to the canvas container div
    f.canvas = f.createCanvas(windowWidth, 2000);
    f.canvas.parent("FlowFieldContainer");
    f.background(20);

    f.noiseDetail(1);
    f.angleMode(f.DEGREES);

    for (f.x = 0; f.x < f.width; f.x += (f.width/f.volume)) {
      for (f.y = 0; f.y < f.height; f.y += (f.width/f.volume)) {
        f.randX = f.random(-25, 25);
        f.randY = f.random(-25, 25);

        f.vector = f.createVector(f.x + f.randX, f.y + f.randY);
        f.vector2 = f.createVector(f.x + f.randX, f.y + f.randY);
        f.points.push(f.vector);
        f.inversePoints.push(f.vector2);
      }
    }

    
    // Generate random color pallet range
    f.r1 = f.random(255);
    f.r2 = f.random(255);
    f.g1 = f.random(255);
    f.g2 = f.random(255);
    f.b1 = f.random(255);
    f.b2 = f.random(255);

    f.angleMult = f.random(0.001, 0.01);

    //circle = height/2;
  }

  f.draw = function() {
    f.fill(255);
    f.noStroke();
    
    for (f.i = 0; f.i < f.points.length; f.i++) {
      // Map colors
      f.r = f.map(f.points[f.i].x, 0, f.width, f.r1, f.r2);
      f.g = f.map(f.points[f.i].y, 0, f.height, f.g1, f.g2);
      f.b = f.map(f.points[f.i].x, 0, f.width, f.b1, f.b2);
      

      // all of this nonsense needs to be fixed
      f.alphaW;
      f.alphaH;
      f.alpha;
      
      f.alphaW1 = f.map(f.points[f.i].x, 0, f.width, 0, 255);
      f.alphaW2 = f.map(f.points[f.i].x, 0, f.width, 255, 0);
      if (f.alphaW1 < f.alphaW2) {
        f.alphaW = f.alphaW1
      } else {
        f.alphaW = f.alphaW2
      }

      f.alphaH1 = f.map(f.points[f.i].y, 0, f.height, 0, 255);
      f.alphaH2 = f.map(f.points[f.i].y, 0, f.height, 255, 0);
      if (f.alphaH1 < f.alphaH2) {
        f.alphaH = f.alphaH1
      } else {
        f.alphaH = f.alphaH2
      }

      if (f.alphaH < f.alphaW) {
        f.alpha = f.alphaH
      } else {
        f.alpha = f.alphaW;
      }
      
      f.fill(f.r,f.g,f.b, f.alpha);

      // Follow the noise
      f.angle = f.map(f.noise(f.points[f.i].x * f.angleMult, f.points[f.i].y * f.angleMult), 0, 1, 0, 720)
      f.points[f.i].add(f.createVector(f.cos(f.angle), f.sin(f.angle)));

      // if (dist(width/2, height/2, points[i].x, points[i].y) < circle) {
      //   ellipse(points[i].x, points[i].y, circleSize, circleSize);
      // }

      
      f.ellipse(f.points[f.i].x, f.points[f.i].y, f.circleSize, f.circleSize);
    }

    if (f.timeElapsed > 900) {
      f.background(20,20,20, f.backgroundAlpha)
      for (f.i = 0; f.i < 1; f.i++) {
        f.points.splice(f.points.length-1,1);
        if (f.points.length == 0) {
          f.resetFlowField();
        }
      }
      
      
      for (f.i = 0; f.i < f.inversePoints.length; f.i++) {
        f.fill(20);
        f.angle = f.map(f.noise(f.inversePoints[f.i].x * f.angleMult, f.inversePoints[f.i].y * f.angleMult), 0, 1, 0, 720)
        f.inversePoints[f.i].add(f.createVector(f.cos(f.angle), f.sin(f.angle)));

        f.ellipse(f.inversePoints[f.i].x, f.inversePoints[f.i].y, f.circleSize, f.circleSize);
      }

      f.backgroundAlpha+= 0.09;
    }
    f.timeElapsed++;
  }


  f.resetFlowField = function() {
    f.points = [];
    f.inversePoints = [];
    f.timeElapsed = 0;
    f.backgroundAlpha = 10;


    for (f.x = 0; f.x < f.width; f.x += (f.width/f.volume)) {
      for (f.y = 0; f.y < f.height; f.y += (f.width/f.volume)) {
        f.randX = f.random(-10, 10);
        f.randY = f.random(-10, 10);

        f.vector = f.createVector(f.x + f.randX, f.y + f.randY);
        f.vector2 = f.createVector(f.x + f.randX, f.y + f.randY);
        f.points.push(f.vector);
        f.inversePoints.push(f.vector2);
      }
    }

    // Generate random color pallet range
    f.r1 = f.random(255);
    f.r2 = f.random(255);
    f.g1 = f.random(255);
    f.g2 = f.random(255);
    f.b1 = f.random(255);
    f.b2 = f.random(255);

    f.angleMult = f.random(0.001, 0.01);
    //circle = height/2;
  }

}


var myp52 = new p5(FlowField);
