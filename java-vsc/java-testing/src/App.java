import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class App {

  public static ArrayList<Integer> refineArray(ArrayList<Integer> numbers) {
    // Integer[] copy = numbers;
    List<Integer> copy = numbers
      .stream()
      .filter(number -> numbers.contains(number))
      .collect(Collectors.toList());
    ArrayList<Integer> arrList = new ArrayList<Integer>(copy);
    return arrList;
  }

  public static void main(String[] args) throws Exception {
    ArrayList<Integer> testList = new ArrayList<Integer>();
    testList.add(1);
    testList.add(1);
    testList.add(2);
    testList.add(2);
    testList.add(3);
    testList.add(3);

    System.out.println(refineArray(testList));
  }
}
