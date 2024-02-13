package music;

public class Track {

  protected float length;
  private String name;
  private String extension;

  public Track(float length, String extension, String name) {
    this.setExtension(extension);
    this.setLength(length);
    this.setName(name);
  }

  public void setLength(float length) {
    this.length = length;
  }

  protected String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setExtension(String extension) {
    this.extension = extension;
  }

  public String getFileName() {
    return this.generateFileName() + "." + this.extension;
  }

  protected String generateFileName() {
    return this.name.trim().toLowerCase().replace(" ", "-");
  }

  public void printTrackInfo() {
    System.out.println(
      String.format("%s - %.2fm", this.getFileName(), this.length)
    );
  }
}
