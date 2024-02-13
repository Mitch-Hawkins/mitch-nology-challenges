package interfaces;

public class Bike implements Vehicle {

  private float speed;

  public Bike(float speed) {
    this.speed = speed;
  }

  @Override
  public float getSpeed() {
    return this.speed / 1.609f;
  }

  public void setSpeed(float speed) {
    this.speed = speed;
  }

  @Override
  public void decreasedSpeed(float s) {
    this.speed = speed - s;
  }
}
