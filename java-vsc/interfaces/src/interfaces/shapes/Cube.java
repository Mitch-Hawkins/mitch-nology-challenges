package interfaces.shapes;

public class Cube implements SurfaceArea, Volume {

  private float side;

  public Cube(float side) {
    this.side = side;
  }

  @Override
  public double getVolume() {
    return (this.side * this.side * this.side);
  }

  @Override
  public double getSurfaceArea() {
    return 6 * (this.side * this.side);
  }
}
