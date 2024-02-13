import java.util.Arrays;
import java.util.List;

/**
 * Hello world!
 *
 */
public class App {

  public static void main(String[] args) {
    System.out.println("7 == \"7\" = " + 7 == "7");
    List<String> strings = List.of("apples", "bananas");
    StringUtils lol = new StringUtils();
    System.out.println(lol.join(strings, "and"));
    FunctionsWithExceptions meh = new FunctionsWithExceptions();
    FunctionsWithExceptions.checkPass(null);
    System.out.println("Your attempt was " + meh.verifyCode(132));
  }

  public static int power(int voltage, float current) {
    return voltage * (int) current;
  }

  public static int[] myMethod(int[] numbers) {
    int[] newArray = new int[numbers.length];
    for (int i = 0; i < numbers.length; i++) {
      newArray[i] = numbers[i] + 1;
    }
    return newArray;
  }

  public static int[] myBetterMethod(int[] numbers) {
    return Arrays.stream(numbers).map(num -> num + 1).toArray();
  }
}
