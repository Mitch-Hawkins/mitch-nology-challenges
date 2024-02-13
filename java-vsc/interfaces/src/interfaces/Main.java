package interfaces;

import interfaces.composition.Enemy;
import interfaces.composition.EnemyType;
import interfaces.composition.Vector2D;
import interfaces.composition.Vector3D;
import interfaces.composition.Vehicle;
import java.util.ArrayList;

public class Main {

  public static void greeting(MakesSound animal) {
    System.out.println(animal.makeSound() + " " + animal.makeSound());
  }

  public static void printName(Animal animal) {
    System.out.println(animal.getName());
  }

  public static void main(String[] args) throws Exception {
    // Pig pig = new Pig("Tracey");

    // System.out.println(pig.makeSound());
    // System.out.println(pig.favouriteFood());

    // //CA2============================================================

    // ArrayList<IsMedia> mediaArray = new ArrayList<IsMedia>();

    // mediaArray.add(new Video("My wedding"));
    // mediaArray.add(new Video("Tracey's first steps"));

    // mediaArray.add(
    //   new Book("Harry Potter and the blah blah", "JK Rowling", 2000)
    // );

    // mediaArray.add(new Song("Seven Nation Army", "flac"));

    // for (IsMedia media : mediaArray) {
    //   System.out.printf("%s.%s\n", media.getTitle(), media.getFormat());
    // }

    // Car car = new Car(0);
    // Bike bike = new Bike(0);

    // bike.setSpeed(10);
    // bike.decreasedSpeed(5);

    // car.setSpeed(100);
    // car.decreasedSpeed(50);

    // System.out.println(bike.getSpeed());
    // System.out.println(car.getSpeed());

    // //CA3============================================================
    Enemy creeper = new Enemy(
      new Vector2D(0, 0),
      new Vector2D(10, 0),
      new Vector2D(1, 0),
      EnemyType.Zombie
    );

    Enemy onyxia = new Enemy(
      new Vector2D(0, 0),
      new Vector2D(10, 0),
      new Vector2D(1, 0),
      EnemyType.Dragon
    );

    //============================

    Vehicle car = new Vehicle(
      new Vector3D(0, 0, 0),
      new Vector3D(5, 0, 0),
      new Vector3D(10, 0, 0),
      new Vector3D(4, 2, 3),
      4,
      4,
      100,
      "Ford",
      "XR8"
    ) {};

    Vehicle plane = new Vehicle(
      new Vector3D(0, 0, 100),
      new Vector3D(50, 0, 0),
      new Vector3D(30, 0, 0),
      new Vector3D(70, 10, 20),
      6,
      180,
      500,
      "Boeing",
      "747"
    ) {};
  }
}
