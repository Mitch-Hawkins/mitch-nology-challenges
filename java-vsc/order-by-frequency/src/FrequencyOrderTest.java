import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;
import org.junit.*;

public class FrequencyOrderTest {

  @Test
  public void orderByFrequency_FunctionWorksWithIntegers_ReturnsOrderedIntegers() {
    ArrayList<Integer> input = new ArrayList<>(
      List.of(1, 2, 2, 2, 2, 3, 3, 3, 4, 4)
    );
    List<Integer> result = FrequencyOrder.orderByFrequency(input);
    assertEquals(List.of(2, 3, 4, 1), result);
  }

  @Test
  public void orderByFrequency_FunctionWorksWithStrings_ReturnsOrderedStrings() {
    ArrayList<String> input = new ArrayList<>(
      List.of("dilly", "dally", "dilly", "dolly", "dally", "dilly")
    );
    List<String> result = FrequencyOrder.orderByFrequency(input);
    assertEquals(List.of("dilly", "dally", "dolly"), result);
  }

  @Test
  public void orderByFrequency_FunctionWithEmptyList_ReturnsEmptyList() {
    ArrayList<Integer> input = new ArrayList<>();
    List<Integer> result = FrequencyOrder.orderByFrequency(input);
    assertEquals(List.of(), result);
  }
}
