class Vehicle {
  constructor(x, y, pos) {
    if (pos == undefined) {
      this.pos = createVector(random(x-600, x+600), random(height, height*1.1));
    } else {
      this.pos = pos;
    }
    

    this.target = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();

    this.maxSpeed = 10;
    this.maxForce = 1;
    this.r = TextSize/50;

    this.finished = false;

    this.rainbow = false;

    this.R = random(255);
    this.G = random(255);
    this.B = random(255);
  }

  behaviors() {
    let arrive = this.arrive(this.target);

    let mouse = createVector(mouseX, mouseY);
    let flee = this.flee(mouse);

    arrive.mult(1);
    flee.mult(2);

    this.applyForce(arrive);
    this.applyForce(flee);
  }

  applyForce(f) {
    this.acc.add(f);
  }

  arrive(target) {
    let desired = p5.Vector.sub(target, this.pos);
    let d = desired.mag();
    let speed = this.maxSpeed;
    if (d < 100) {
      speed = map(d, 0, 100, 0, this.maxSpeed);
    }
    desired.setMag(speed);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    return steer;
  }

  flee(target) {
    let desired = p5.Vector.sub(target, this.pos);
    let d = desired.mag();
    if (d < 100) {
      desired.setMag(this.maxSpeed);
      desired.mult(-1);
      let steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxForce);
      return steer;
    } else {
      return createVector(0, 0);
    }
  }

  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);

    if (floor(this.pos.x) == floor(this.target.x)) {
      if (floor(this.pos.y) == floor(this.target.y)) {
        this.finished = true;
      }
    }
  }

  show() {
    if (this.rainbow || rainbow) {
      colorMode(HSB);
      stroke(this.pos.x % colorLoop, 255, 255);
    } else {
      stroke(255);
    }
    strokeWeight(this.r);
    point(this.pos.x, this.pos.y);
  }
}
