public class ParentClass {

  public float data;

  public ParentClass(float data) {
    this.data = data;
  }

  public void parentMethod() {
    System.out.printf("Parent method: data is %.2f \n", data);
  }
}
