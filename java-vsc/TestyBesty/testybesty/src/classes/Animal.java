package classes;

public class Animal {

  String name = "Cat";
  String sound = "Meow";

  public Animal(String name, String sound) {
    this.name = name;
    this.sound = sound;
  }

  public Animal() {}

  public void setName(String name) {
    this.name = name;
  }

  public String getName() {
    return this.name;
  }

  public void setSound(String sound) {
    this.sound = sound;
  }

  public String getSound() {
    return this.sound;
  }
}
