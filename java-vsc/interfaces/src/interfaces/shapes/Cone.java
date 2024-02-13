package interfaces.shapes;

public class Cone implements SurfaceArea, Volume {

  private float height;
  private float radius;

  public Cone(float height, float radius) {
    this.height = height;
    this.radius = radius;
  }

  @Override
  public double getVolume() {
    return Math.PI * (this.radius * this.radius) * (this.height / 3);
  }

  @Override
  public double getSurfaceArea() {
    return (
      Math.PI *
      this.radius *
      (
        this.radius +
        Math.sqrt((this.height * this.height) + (this.radius * this.radius))
      )
    );
  }
}
