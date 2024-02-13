package interfaces;

public class Song implements IsMedia {

  private String format = "mp3";
  private String title;

  public Song(String title, String format) {
    this.title = title;

    if (format != null) {
      this.format = format;
    }
  }

  @Override
  public String getTitle() {
    return this.title;
  }

  @Override
  public String getFormat() {
    return this.format;
  }
}
