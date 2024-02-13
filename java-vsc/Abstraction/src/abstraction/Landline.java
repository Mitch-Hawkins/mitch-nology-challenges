package abstraction;

public class Landline extends Phone {

  private String address;

  public Landline(String phoneNumber, String address) {
    super(phoneNumber);
    this.address = address;
  }
}
