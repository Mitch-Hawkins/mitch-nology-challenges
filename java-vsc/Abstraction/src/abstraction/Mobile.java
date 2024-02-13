package abstraction;

public class Mobile extends Phone {

  public Mobile(String phoneNumber) {
    super(phoneNumber);
  }

  public void text(Mobile mobile, String message) {
    System.out.println(mobile.phoneNumber + " " + message);
  }
}
