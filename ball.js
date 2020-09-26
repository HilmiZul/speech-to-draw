class Ball {
  constructor() {
    this.pos = createVector(random(width), 0);
    this.r = random(80, 150);
    this.gravity = 0.9;
    this.velocity = 0.5;
    this.color = color(255, 255, 255, 200);
}

  show() {
    fill(this.color);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }

  fallDown() {
    this.velocity = this.velocity + this.gravity;
    this.pos.y = this.pos.y + this.velocity;
  }

  checkEdge() {
    if (this.pos.y > height - this.r / 2) {
      this.pos.y = height - this.r / 2;
    }
  }
}
