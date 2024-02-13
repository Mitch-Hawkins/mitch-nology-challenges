package interfaces;

public class Car implements Vehicle {

  private float speed;

  public Car(float speed) {
    this.speed = speed;
  }

  @Override
  public float getSpeed() {
    return (this.speed / 1000 * 3600) / 1.609f;
  }

  public void setSpeed(float speed) {
    this.speed = speed;
  }

  @Override
  public void decreasedSpeed(float s) {
    this.speed = speed - s;
  }
}
