package music;

public class Song extends Track {

  private String artist;
  private String genre;

  public Song(
    float length,
    String extension,
    String name,
    String artist,
    String genre
  ) {
    super(length, extension, name);
    this.artist = artist;
    this.genre = genre;
  }

  @Override
  public void printTrackInfo() {
    System.out.println(
      String.format(
        "%s_%s - %.2f",
        this.artist.toLowerCase(),
        this.generateFileName(),
        this.length
      )
    );
  }
}
