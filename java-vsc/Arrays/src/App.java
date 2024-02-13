import java.util.Arrays;

public class App {

  public static void main(String[] args) throws Exception {
    // int[] basicNumbers = { 1, 2, 3, 4, 5 };
    // // System.out.println("Hello, World!");
    // System.out.println(Arrays.toString(ArrayUtils.increment(basicNumbers)));
    // System.out.println(Arrays.toString(ArrayUtils.reverse(basicNumbers)));
    int[][][][] allDimensions = new int[2][2][3][4];

    for (int i = 0; i < 2; i++) {
      for (int j = 0; j < 2; j++) {
        for (int k = 0; k < 3; k++) {
          for (int l = 0; l < 4; l++) {
            allDimensions[i][j][k][l] = (24 * i) + (12 * j) + (4 * k) + l + 1;
          }
        }
      }
    }

    System.out.print(Arrays.deepToString(allDimensions));
  }
}
//[[[[][][]][[][][]]][[[][][]][[][][]]]]
