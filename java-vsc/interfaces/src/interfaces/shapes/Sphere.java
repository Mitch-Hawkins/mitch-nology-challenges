package interfaces.shapes;

public class Sphere implements SurfaceArea, Volume {

  private float radius;

  public Sphere(float radius) {
    this.radius = radius;
  }

  @Override
  public double getVolume() {
    return (4 / 3) * Math.PI * (this.radius * this.radius * this.radius);
  }

  @Override
  public double getSurfaceArea() {
    return 4 * Math.PI * (this.radius * this.radius);
  }
}
