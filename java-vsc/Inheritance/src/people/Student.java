package people;

public class Student extends Person {

  private String cohort;

  public Student(String name, String cohort) {
    super(name);
    this.cohort = cohort;
  }

  public void sayYourName() {
    System.out.println(
      String.format("%s is from the %s cohort", this.name, this.cohort)
    );
  }
}
