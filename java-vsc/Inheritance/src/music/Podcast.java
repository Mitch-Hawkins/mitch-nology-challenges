package music;

public class Podcast extends Track {

  private String[] guests;
  private int episode;
  private String topic;

  public Podcast(float length, String extension, String name, int episode) {
    super(length, extension, name);
    this.episode = episode;
  }

  public Podcast(
    float length,
    String extension,
    String name,
    int episode,
    String[] guests
  ) {
    this(length, extension, name, episode);
    this.guests = guests;
  }

  public Podcast(
    float length,
    String extension,
    String name,
    int episode,
    String topic
  ) {
    this(length, extension, name, episode);
    this.topic = topic;
  }

  public Podcast(
    float length,
    String extension,
    String name,
    int episode,
    String[] guests,
    String topic
  ) {
    this(length, extension, name, episode);
    this.guests = guests;
    this.topic = topic;
  }

  @Override
  public void printTrackInfo() {
    System.out.println(
      String.format(
        "Episode %s of %s runs for %.2f minutes",
        this.episode,
        this.getName(),
        this.length
      )
    );
  }
}
