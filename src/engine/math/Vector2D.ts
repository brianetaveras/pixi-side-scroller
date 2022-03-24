class Vector2D {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public getAngle() {
    return Math.atan2(this.y, this.x);
  }

  public setAngle(angle: number): void {
    const length = this.getLength();
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
  }

  public getLength(): number {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  public setLength(length: number) {
    const angle = this.getAngle();
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
  }

  public add(vector2: Vector2D): Vector2D {
    const newVector = new Vector2D(this.x + vector2.x, this.y + vector2.y);
    return newVector;
  }

  public subtract(vector2: Vector2D): Vector2D {
    const newVector = new Vector2D(this.x - vector2.x, this.y - vector2.y);
    return newVector;
  }

  public multiply(val: number): Vector2D {
    const newVector = new Vector2D(this.x * val, this.y * val);
    return newVector;
  }

  public divide(val: number): Vector2D {
    const newVector = new Vector2D(this.x / val, this.y / val);
    return newVector;
  }

  public addTo(vector2: Vector2D): void {
    this.x += vector2.x;
    this.y += vector2.y;
  }

  public subtractFrom(vector2: Vector2D): void {
    this.x -= vector2.x;
    this.y -= vector2.y;
  }

  public multiplyBy(val: number): void {
    this.x *= val;
    this.y *= val;
  }

  public divideBy(val: number): void {
    this.x /= val;
    this.y /= val;
  }
}

export default Vector2D;
