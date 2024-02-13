package abstraction;

public abstract class Container {

  public abstract int getVolume();

  public int teaspoonCount() {
    return getVolume() / 150;
  }
}
