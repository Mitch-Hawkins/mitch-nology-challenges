package interfaces.composition;

public class Vehicle {

  private Vector3D position;
  private Vector3D acceleration;
  private Vector3D velocity;
  private Vector3D size;
  private int amountOfWheels;
  private int amountOfPassengers;
  private int toughness;
  private String brand;
  private String model;

  public Vehicle(
    Vector3D position,
    Vector3D acceleration,
    Vector3D velocity,
    Vector3D size,
    int amountOfWheels,
    int amountOfPassengers,
    int toughness,
    String brand,
    String model
  ) {
    this.position = position;
    this.acceleration = acceleration;
    this.velocity = velocity;
    this.size = size;
    this.amountOfWheels = amountOfWheels;
    this.amountOfPassengers = amountOfPassengers;
    this.toughness = toughness;
    this.brand = brand;
    this.model = model;
  }
}
// Position
// Acceleration
// Velocity
// Wheels
// Speed
// Toughness
// Passengers
// Size
// Brand
// Model
