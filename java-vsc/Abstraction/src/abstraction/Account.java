package abstraction;

abstract class Account {

  protected float balance;

  abstract float getInterestRate();

  abstract float payoutInterval();

  public float getReturn(int years) {
    float temp = balance * (1 + this.getInterestRate());
    return (float) Math.pow(temp, years) / payoutInterval();
  }
}
