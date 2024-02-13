public class ChildClass extends ParentClass {

  public String name;

  public ChildClass(float data, String name) {
    super(data);
    this.name = name;
  }

  public void childMethod() {
    System.out.println(
      String.format("%s's data is %.3f", this.name, this.data)
    );
  }
}
