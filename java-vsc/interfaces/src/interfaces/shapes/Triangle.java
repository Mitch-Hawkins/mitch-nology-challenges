package interfaces.shapes;

public class Triangle implements Area, Perimeter {

  private float sideA;

  public Triangle(float sideA) {
    this.sideA = sideA;
  }

  @Override
  public double getPerimeter() {
    return this.sideA * 3;
  }

  @Override
  public double getArea() {
    return Math.sqrt(3) / 4 * (this.sideA * this.sideA);
  }
}
