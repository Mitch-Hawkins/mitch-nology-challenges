package methods;

public class Person {

  String firstName;
  String middleName;
  String lastName;

  public Person(String firstName, String lastName) {
    this.firstName = firstName;
    // this.middleName = middleName;
    this.lastName = lastName;
  }

  public Person(String firstName, String middleName, String lastName) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
  }

  public String fullName() {
    if (this.middleName != null) {
      return this.firstName + this.middleName + this.lastName;
    } else {
      return this.firstName + this.lastName;
    }
  }
}
