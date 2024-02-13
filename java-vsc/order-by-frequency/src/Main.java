import java.util.ArrayList;
import java.util.List;

public class Main {

  public static void main(String[] args) {
    ArrayList<Integer> input1 = new ArrayList<>(
      List.of(1, 2, 2, 2, 2, 3, 3, 3, 4, 4)
    );
    System.out.println(FrequencyOrder.orderByFrequency(input1));

    ArrayList<String> input2 = new ArrayList<>(
      List.of("apple", "banana", "apple", "orange", "banana", "apple")
    );
    System.out.println(FrequencyOrder.orderByFrequency(input2));
  }
}
