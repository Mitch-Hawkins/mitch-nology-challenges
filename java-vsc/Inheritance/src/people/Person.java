package people;

public class Person {

  protected String name;

  public Person(String name) {
    this.name = name;
  }

  public void sayYourName() {
    System.out.println(name);
  }
}
