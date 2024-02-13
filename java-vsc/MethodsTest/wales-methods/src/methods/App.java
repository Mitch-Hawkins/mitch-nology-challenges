package methods;

public class App {

  public static void main(String[] args) throws Exception {
    Person me = new Person("Mitchell", "Hawkins");
    System.out.println(me.fullName());
    System.out.println(Area.findArea(2));
    System.out.println(Dates.formatTime(4000));
  }
}
