class Triangle {
  constructor() {
    this.pos = createVector(random(width), 0);
    this.gravity = 0.9;
    this.velocity = 0.5;
    this.height = random(100, 150);
    this.base = random(100, 150);
    this.color = color(250, 100, 100, 200);
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
      this.pos.y = height;
    }
  }
}
