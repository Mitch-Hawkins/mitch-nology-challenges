// package java-vsc;

import java.util.Scanner;

public class Hello {

  public static void main(String[] args) {
    System.out.println("Yay");
    Scanner s = new Scanner(System.in);
    System.out.println("Enter Name");
    String name = s.nextLine();
    System.out.println("Hello " + name);
    s.close();
  }
}
