package methods;

public class Dates {

  static String formatTime(long seconds) {
    int minutes = (int) (seconds / 60) % 60;
    int hours = (int) seconds / 60 / 60;
    seconds = seconds % 60;
    return hours + "h" + minutes + "m" + (int) seconds + "s";
  }

  static String formatTime(long seconds, long minutes) {
    long totalSeconds = seconds + (minutes * 60);
    return formatTime(totalSeconds);
  }
}
