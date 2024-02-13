import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;

public class FrequencyOrder {

  public static <T> ArrayList<T> orderByFrequency(ArrayList<T> input) {
    ArrayList<T> uniqueItems = new ArrayList<>(new HashSet<>(input));

    Collections.sort(
      uniqueItems,
      (a, b) ->
        Collections.frequency(input, b) - Collections.frequency(input, a)
    );

    return uniqueItems;
  }
}
