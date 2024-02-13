package abstraction;

public class App {

  public static void main(String[] args) {
    YouthSaverAccount savings = new YouthSaverAccount(100);
    System.out.println(savings.getReturn(1));
    LatteGlass latte = new LatteGlass();
    System.out.println(latte.teaspoonCount());

    Landline phone1 = new Landline("12345", "Home");
    Mobile phone2 = new Mobile("67890");
    Mobile phone3 = new Mobile("13579");
    phone1.call(phone2);
    phone2.text(phone3, "Text Message");
  }
}
