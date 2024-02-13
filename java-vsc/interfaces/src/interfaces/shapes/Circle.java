package interfaces.shapes;

public class Circle implements Area, Perimeter {

  private float radius;

  public Circle(float radius) {
    this.radius = radius;
  }

  @Override
  public double getPerimeter() {
    return 2 * Math.PI * this.radius;
  }

  @Override
  public double getArea() {
    return Math.PI * (this.radius * this.radius);
  }
}
