package interfaces.composition;

//Object composition, DataOrientedProgramming, DataDriverProgramming

// class Vector2D {

//   public double x;
//   public double y;

//   public Vector2D(double x, double y) {
//     this.x = x;
//     this.y = y;
//   }
// }

// enum EnemyType {
//   Zombie,
//   Dragon,
//   Humanoid,
// }

interface IHealth {
  int getHealth();
  void decrease();
}

public class Enemy {

  private Vector2D position;
  private Vector2D velocity;
  private Vector2D acceleration;
  private EnemyType type;

  public Enemy(
    Vector2D position,
    Vector2D velocity,
    Vector2D acceleration,
    EnemyType type
  ) {
    this.position = position; //dependency injection?
    this.velocity = velocity;
    this.acceleration = acceleration;
    this.type = type;
  }
}
