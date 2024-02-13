import java.util.Arrays;

public class ArrayUtils {

  public static int[] increment(int[] array) {
    int[] numbers = Arrays.copyOf(array, array.length);
    for (int i = 0; i <= array.length - 1; i++) {
      numbers[i]++;
    }
    return numbers;
  }

  public static int[] reverse(int[] array) {
    int[] numbers = Arrays.copyOf(array, array.length);
    for (int i = 0; i <= array.length - 1; i++) {
      numbers[i] = array.length - i;
    }
    return numbers;
  }
}
