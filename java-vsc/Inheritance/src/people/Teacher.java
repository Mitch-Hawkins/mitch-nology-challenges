package people;

public class Teacher extends Person {

  public Teacher(String name) {
    super(name);
  }

  public void meeting(Person host) {
    System.out.println(
      String.format("%s has a meeting with %s", this.name, host.name)
    );
  }
}
