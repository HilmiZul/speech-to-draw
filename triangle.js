class Triangle {
  constructor() {
    this.pos = createVector(random(width)-100, 0);
    this.gravity = 0.9;
    this.velocity = 0.5;
    this.height = random(100, 150);
    this.base = random(100, 150);
    this.color = color(random(100, 255), random(100, 255), random(200, 255), 200);
    this.massa = 10;
  }

  show() {
    fill(this.color);
    noStroke();
    triangle(
              this.pos.x, this.pos.y, 
              this.pos.x, this.pos.y - this.height, 
              this.pos.x + this.base, this.pos.y
            );
  }

  fallDown() {
    this.velocity = this.velocity + this.gravity;
    this.pos.y = this.pos.y + this.velocity;
  }

  checkEdge() {
    if (this.pos.y > height) {
      this.velocity = (this.velocity - this.massa) * -1;
      this.pos.y = height;
    }
  }
}
