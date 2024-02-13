package abstraction;

public abstract class Phone {

  protected String phoneNumber;

  public Phone(String phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  public void call(Phone phone) {
    System.out.println(String.format("%s", phone.phoneNumber));
  }
}
