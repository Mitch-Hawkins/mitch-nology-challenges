package interfaces.shapes;

public class Rhombus implements Area, Perimeter {

  private float side;
  private float diagA;
  private float diagB;

  public Rhombus(float side, float diagA, float diagB) {
    this.side = side;
    this.diagA = diagA;
    this.diagB = diagB;
  }

  @Override
  public double getPerimeter() {
    return this.side * 4;
  }

  @Override
  public double getArea() {
    return (this.diagA * this.diagB) / 2;
  }
}
