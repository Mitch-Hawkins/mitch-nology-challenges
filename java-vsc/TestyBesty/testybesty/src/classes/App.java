package classes;

public class App {

  public static void main(String[] args) throws Exception {
    System.out.println("Hello, World!");
    Person me = new Person("Mitch", 25);
    System.out.println(me.getAge());
    System.out.println(me.getName());
  }
}
